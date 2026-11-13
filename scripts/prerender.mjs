import { readFile, writeFile, readdir } from 'node:fs/promises'
import { render } from '../dist-ssr/entry-server.js'
const template = await readFile('dist/index.html', 'utf8')
const html = render()
if (!html.includes('Product Strategy &amp; Growth') || !html.includes('Indian Journal of Law and Society') || !html.includes('Publications')) throw new Error('Prerender missing profile content')

// Preload the two Latin font files used above the fold (self-hosted, hashed by Vite).
const assets = await readdir('dist/assets')
const fonts = ['dm-sans-latin-wght-normal', 'libre-caslon-display-latin-400-normal']
  .map(name => assets.find(file => file.startsWith(name) && file.endsWith('.woff2')))
if (fonts.some(file => !file)) throw new Error('Prerender could not find the font files to preload')
const preloads = fonts.map(file => `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin>`).join('\n  ')

await writeFile('dist/index.html', template
  .replace('<!--font-preloads-->', preloads)
  .replace('<div id="root">', '<div id="root" data-prerendered="true">')
  .replace('<!--app-html-->', html))
console.log('Rendered complete profile, career, press, patent, research, impact and recommendations into HTML.')
