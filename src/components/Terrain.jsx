import { useEffect, useRef, useState } from 'react'
import HeroField from './HeroField'

// The hero's living backdrop: a slowly shifting contour map drawn by a WebGL fragment
// shader. The ground rises under the pointer, so the contour lines open around it.
// Falls back to the 2D line field when WebGL is unavailable, and draws nothing for
// visitors who ask for reduced motion.

const VERTEX = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}'

const FRAGMENT = `
#ifdef DERIVATIVES
#extension GL_OES_standard_derivatives : enable
#endif
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec3 uPointer;
uniform float uZoom;

vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec2 mod289(vec2 x){return x-floor(x*(1./289.))*289.;}
vec3 permute(vec3 x){return mod289(((x*34.)+1.)*x);}
float snoise(vec2 v){
  const vec4 C=vec4(.211324865405187,.366025403784439,-.577350269189626,.024390243902439);
  vec2 i=floor(v+dot(v,C.yy));
  vec2 x0=v-i+dot(i,C.xx);
  vec2 i1=(x0.x>x0.y)?vec2(1.,0.):vec2(0.,1.);
  vec4 x12=x0.xyxy+C.xxzz;
  x12.xy-=i1;
  i=mod289(i);
  vec3 p=permute(permute(i.y+vec3(0.,i1.y,1.))+i.x+vec3(0.,i1.x,1.));
  vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.);
  m=m*m;m=m*m;
  vec3 x=2.*fract(p*C.www)-1.;
  vec3 h=abs(x)-.5;
  vec3 ox=floor(x+.5);
  vec3 a0=x-ox;
  m*=1.79284291400159-.85373472095314*(a0*a0+h*h);
  vec3 g;
  g.x=a0.x*x0.x+h.x*x0.y;
  g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.*dot(m,g);
}
float fbm(vec2 p){
  float a=.5,s=0.;
  for(int i=0;i<3;i++){s+=a*snoise(p);p=p*1.9+vec2(17.3,9.1);a*=.42;}
  return s;
}
void main(){
  vec2 uv=gl_FragCoord.xy/uRes;
  float aspect=uRes.x/uRes.y;
  vec2 p=vec2(uv.x*aspect,uv.y)*uZoom;
  float t=uTime*.028;
  vec2 q=vec2(fbm(p*.55+vec2(0.,t)),fbm(p*.55+vec2(4.7,-t*.7)));
  float h=fbm(p*.62+q*.55+vec2(t*.5,t*.2));
  vec2 m=vec2(uPointer.x/uRes.x*aspect,uPointer.y/uRes.y)*uZoom;
  float d=distance(p,m);
  h+=uPointer.z*.26*exp(-d*d/.03);
  float v=h*6.;
  float g=abs(fract(v-.5)-.5);
#ifdef DERIVATIVES
  float w=fwidth(v);
#else
  float w=.03;
#endif
  float line=1.-smoothstep(w*.15,w*.95,g);
  float idx=floor(v+.5);
  float major=1.-step(.5,abs(mod(idx,4.)));
  float acc=1.-step(.5,abs(idx-1.));
  vec3 ink=vec3(.137,.157,.133);
  vec3 accent=vec3(.514,.314,.22);
  float a=line*(.1+.085*major);
  a=mix(a,line*.5,acc);
  vec3 col=mix(ink,accent,acc);
  float wash=smoothstep(.1,-.7,h)*.028;
  float outA=a+wash*(1.-a);
  vec3 outC=col*a+ink*wash*(1.-a);
  gl_FragColor=vec4(outC,outA);
}`

function compile(gl, type, source) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null
}

export default function Terrain() {
  const ref = useRef(null)
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, powerPreference: 'low-power' })
    if (!gl) { setFallback(true); return }
    const derivatives = gl.getExtension('OES_standard_derivatives')
    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX)
    const fs = compile(gl, gl.FRAGMENT_SHADER, (derivatives ? '#define DERIVATIVES 1\n' : '') + FRAGMENT)
    const program = gl.createProgram()
    if (!vs || !fs) { setFallback(true); return }
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { setFallback(true); return }
    gl.useProgram(program)
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const location = gl.getAttribLocation(program, 'p')
    gl.enableVertexAttribArray(location)
    gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0)
    const uRes = gl.getUniformLocation(program, 'uRes')
    const uTime = gl.getUniformLocation(program, 'uTime')
    const uPointer = gl.getUniformLocation(program, 'uPointer')
    const uZoom = gl.getUniformLocation(program, 'uZoom')

    let ratio = 1
    let zoom = 1
    let visible = true
    let frame = 0
    let last = 0
    const pointer = { x: 0, y: 0, tx: 0, ty: 0, strength: 0, target: 0 }
    const started = performance.now()

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      ratio = Math.min(1.25, window.devicePixelRatio || 1)
      canvas.width = Math.max(1, Math.round(rect.width * ratio))
      canvas.height = Math.max(1, Math.round(rect.height * ratio))
      gl.viewport(0, 0, canvas.width, canvas.height)
      zoom = rect.width < 760 ? 1.7 : 1
    }
    const draw = now => {
      frame = requestAnimationFrame(draw)
      if (!visible || now - last < 38) return
      last = now
      pointer.x += (pointer.tx - pointer.x) * 0.08
      pointer.y += (pointer.ty - pointer.y) * 0.08
      pointer.strength += (pointer.target - pointer.strength) * 0.05
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, (now - started) / 1000)
      gl.uniform1f(uZoom, zoom)
      gl.uniform3f(uPointer, pointer.x * ratio, canvas.height - pointer.y * ratio, pointer.strength)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }
    const onPointer = event => {
      const rect = canvas.getBoundingClientRect()
      pointer.tx = event.clientX - rect.left
      pointer.ty = event.clientY - rect.top
      pointer.target = event.clientY < rect.bottom ? 1 : 0
    }
    const onLeave = () => { pointer.target = 0 }
    const watch = new IntersectionObserver(entries => { visible = entries[0].isIntersecting })

    resize()
    watch.observe(canvas)
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointer, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    frame = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(frame)
      watch.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointer)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  if (fallback) return <HeroField />
  return <canvas ref={ref} className="hero-field" aria-hidden="true" />
}
