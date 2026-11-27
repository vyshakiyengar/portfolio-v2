import { useEffect, useRef, useState } from 'react'
import HeroField from './HeroField'

// The hero's living backdrop, now in three dimensions: the same contour lines, drawn over a
// real landscape seen in perspective. The camera glides slowly across it, tilts and moves
// forward as the page scrolls, and the ground rises under the pointer (or under a tap on
// phones). The far ground fades into the paper, so the text in front stays easy to read.
// Falls back to the 2D line field when WebGL is unavailable, and draws nothing for visitors
// who ask for reduced motion.

const NOISE = `
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
}`

// Heights are computed per vertex, so the fragment shader only has to draw lines.
const VERTEX = `
precision highp float;
attribute vec2 aXZ;
uniform mat4 uViewProj;
uniform vec3 uEye;
uniform float uTime;
uniform float uFlow;
uniform vec3 uPointer;
varying float vH;
varying float vDist;
varying float vLit;
${NOISE}
float ground(vec2 p){
  vec2 s=vec2(p.x,p.y+uFlow)*.34;
  float t=uTime*.018;
  vec2 q=vec2(fbm(s*.8+vec2(0.,t)),fbm(s*.8+vec2(4.7,-t*.7)));
  float h=fbm(s+q*.5+vec2(t*.4,t*.15))*.62;
  vec2 d=p-uPointer.xy;
  return h+uPointer.z*.42*exp(-dot(d,d)/.42);
}
void main(){
  vec2 p=aXZ;
  float h=ground(p);
  // Smooth normals from neighbouring heights, for a soft hill shade lit from the upper left.
  float e=.06;
  vec3 n=normalize(vec3(h-ground(p+vec2(e,0.)),e,h-ground(p+vec2(0.,e))));
  vLit=dot(n,normalize(vec3(-.55,.75,-.35)));
  vec3 world=vec3(p.x,h,p.y);
  vH=h;
  vDist=distance(world,uEye);
  gl_Position=uViewProj*vec4(world,1.);
}`

const FRAGMENT = `
#extension GL_OES_standard_derivatives : enable
precision highp float;
uniform float uFogNear;
uniform float uFogFar;
uniform float uDensity;
varying float vH;
varying float vDist;
varying float vLit;
void main(){
  float v=vH*uDensity;
  float g=abs(fract(v-.5)-.5);
  float w=fwidth(v);
  float line=1.-smoothstep(w*.2,w*1.05,g);
  // Where lines crowd together in the distance they thin out instead of turning grey.
  line*=1.-smoothstep(.12,.34,w);
  float idx=floor(v+.5);
  float major=1.-step(.5,abs(mod(idx,4.)));
  float acc=1.-step(.5,abs(idx-2.));
  vec3 ink=vec3(.137,.157,.133);
  vec3 accent=vec3(.514,.314,.22);
  float a=line*(.14+.1*major);
  a=mix(a,line*.6,acc);
  vec3 col=mix(ink,accent,acc);
  float wash=smoothstep(.97,.55,vLit)*.07;
  float fog=1.-smoothstep(uFogNear,uFogFar,vDist);
  fog*=fog;
  a*=fog;
  wash*=fog;
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

// A grid of points on the ground: denser close to the camera, where it is seen largest,
// and wider further away, where the view opens out.
function buildGround(cols, rows, near, far) {
  const points = new Float32Array(cols * rows * 2)
  let k = 0
  for (let j = 0; j < rows; j++) {
    const z = near + (far - near) * Math.pow(j / (rows - 1), 1.55)
    const half = 0.8 + z * 1.3
    for (let i = 0; i < cols; i++) {
      points[k++] = -half + (2 * half * i) / (cols - 1)
      points[k++] = z
    }
  }
  const indices = new Uint16Array((cols - 1) * (rows - 1) * 6)
  k = 0
  for (let j = 0; j < rows - 1; j++) {
    for (let i = 0; i < cols - 1; i++) {
      const a = j * cols + i
      const b = a + 1
      const c = a + cols
      const d = c + 1
      indices[k++] = a; indices[k++] = c; indices[k++] = b
      indices[k++] = b; indices[k++] = c; indices[k++] = d
    }
  }
  return { points, indices }
}

const normalize = v => { const l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / l, v[1] / l, v[2] / l] }
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]

// Column-major view-projection matrix for a camera at `eye` looking along `forward`.
function viewProjection(eye, forward, fov, aspect, near, far) {
  const f = normalize(forward)
  const r = normalize(cross(f, [0, 1, 0]))
  const u = cross(r, f)
  const view = [
    r[0], u[0], -f[0], 0,
    r[1], u[1], -f[1], 0,
    r[2], u[2], -f[2], 0,
    -dot(r, eye), -dot(u, eye), dot(f, eye), 1,
  ]
  const t = 1 / Math.tan(fov / 2)
  const proj = [t / aspect, 0, 0, 0, 0, t, 0, 0, 0, 0, (far + near) / (near - far), -1, 0, 0, (2 * far * near) / (near - far), 0]
  const out = new Float32Array(16)
  for (let c = 0; c < 4; c++) {
    for (let row = 0; row < 4; row++) {
      let s = 0
      for (let k = 0; k < 4; k++) s += proj[k * 4 + row] * view[c * 4 + k]
      out[c * 4 + row] = s
    }
  }
  return { matrix: out, right: r, up: u, forward: f }
}

export default function Terrain() {
  const ref = useRef(null)
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: true, powerPreference: 'low-power' })
    if (!gl || !gl.getExtension('OES_standard_derivatives')) { setFallback(true); return }
    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX)
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT)
    if (!vs || !fs) { setFallback(true); return }
    const program = gl.createProgram()
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { setFallback(true); return }
    gl.useProgram(program)

    const small = window.innerWidth < 760
    const ground = buildGround(small ? 120 : 190, small ? 110 : 150, 0.15, 13)
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
    gl.bufferData(gl.ARRAY_BUFFER, ground.points, gl.STATIC_DRAW)
    const location = gl.getAttribLocation(program, 'aXZ')
    gl.enableVertexAttribArray(location)
    gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0)
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer())
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, ground.indices, gl.STATIC_DRAW)
    const count = ground.indices.length
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)

    const uniform = name => gl.getUniformLocation(program, name)
    const uViewProj = uniform('uViewProj')
    const uEye = uniform('uEye')
    const uTime = uniform('uTime')
    const uFlow = uniform('uFlow')
    const uPointer = uniform('uPointer')
    const uFogNear = uniform('uFogNear')
    const uFogFar = uniform('uFogFar')
    const uDensity = uniform('uDensity')

    let width = 1
    let height = 1
    let ratio = 1
    let visible = true
    let frame = 0
    let scroll = 0
    let scrollTarget = 0
    let camera = null
    let eye = [0, 1, 0]
    const pointer = { x: 0, z: 4, tx: 0, tz: 4, strength: 0, target: 0, pulse: 0 }
    const started = performance.now()

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, rect.width)
      height = Math.max(1, rect.height)
      ratio = Math.min(1.5, window.devicePixelRatio || 1)
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    // Where the section sits in the window: 0 when centred, negative once scrolled past, positive while still below.
    const measure = () => {
      const rect = canvas.getBoundingClientRect()
      const vh = window.innerHeight
      const centre = rect.top + rect.height / 2 - vh / 2
      scrollTarget = Math.max(-1, Math.min(1, centre / (vh / 2 + rect.height / 2)))
    }

    // The point on the ground under a screen position, so the hill rises right under the pointer.
    const groundAt = (clientX, clientY) => {
      if (!camera) return null
      const rect = canvas.getBoundingClientRect()
      const nx = ((clientX - rect.left) / width) * 2 - 1
      const ny = 1 - ((clientY - rect.top) / height) * 2
      const t = Math.tan(FOV / 2)
      const aspect = width / height
      const dir = [0, 1, 2].map(k => camera.forward[k] + nx * t * aspect * camera.right[k] + ny * t * camera.up[k])
      if (dir[1] >= -0.01) return null
      const s = -eye[1] / dir[1]
      return [eye[0] + dir[0] * s, eye[2] + dir[2] * s]
    }

    const FOV = small ? 0.95 : 0.82
    const draw = now => {
      frame = requestAnimationFrame(draw)
      if (!visible) return
      const time = (now - started) / 1000
      scroll += (scrollTarget - scroll) * 0.08
      pointer.x += (pointer.tx - pointer.x) * 0.08
      pointer.z += (pointer.tz - pointer.z) * 0.08
      pointer.pulse *= 0.975
      pointer.strength += (Math.max(pointer.target, pointer.pulse) - pointer.strength) * 0.06

      // Scrolling down tilts the camera towards the ground and carries it forward over the land.
      const pitch = (small ? 0.3 : 0.34) - scroll * 0.42 + Math.sin(time * 0.11) * 0.02
      const yaw = Math.sin(time * 0.07) * 0.06
      eye = [Math.sin(time * 0.05) * 0.35, (small ? 1 : 1.1) - scroll * 0.25, -scroll * 1.6]
      const forward = [Math.sin(yaw) * Math.cos(pitch), -Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch)]
      camera = viewProjection(eye, forward, FOV, width / height, 0.05, 40)

      gl.uniformMatrix4fv(uViewProj, false, camera.matrix)
      gl.uniform3f(uEye, eye[0], eye[1], eye[2])
      gl.uniform1f(uTime, time)
      gl.uniform1f(uFlow, time * 0.045)
      gl.uniform3f(uPointer, pointer.x, pointer.z, pointer.strength)
      gl.uniform1f(uFogNear, small ? 2.8 : 2)
      gl.uniform1f(uFogFar, small ? 10 : 9)
      gl.uniform1f(uDensity, 15)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawElements(gl.TRIANGLES, count, gl.UNSIGNED_SHORT, 0)
    }

    const onPointer = event => {
      if (event.pointerType !== 'mouse' && event.type === 'pointermove') return
      const rect = canvas.getBoundingClientRect()
      const inside = event.clientY > rect.top && event.clientY < rect.bottom
      const hit = inside ? groundAt(event.clientX, event.clientY) : null
      if (!hit) { pointer.target = 0; return }
      pointer.tx = hit[0]
      pointer.tz = hit[1]
      if (event.type === 'pointerdown' && event.pointerType !== 'mouse') {
        // A tap on a phone raises the ground there, and it settles back slowly.
        pointer.x = hit[0]
        pointer.z = hit[1]
        pointer.pulse = 1
      } else {
        pointer.target = 1
      }
    }
    const onLeave = () => { pointer.target = 0 }
    const onScroll = () => measure()
    const watch = new IntersectionObserver(entries => { visible = entries[0].isIntersecting })

    resize()
    measure()
    scroll = scrollTarget
    watch.observe(canvas)
    window.addEventListener('resize', resize)
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointer, { passive: true })
    window.addEventListener('pointerdown', onPointer, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    frame = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(frame)
      watch.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  if (fallback) return <HeroField />
  return <canvas ref={ref} className="hero-field" aria-hidden="true" />
}
