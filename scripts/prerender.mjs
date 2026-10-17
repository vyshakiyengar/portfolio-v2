import { readFile, writeFile } from 'node:fs/promises'
import { render } from '../dist-ssr/entry-server.js'
const template = await readFile('dist/index.html', 'utf8')
const html = render()
if (!html.includes('Product Strategy &amp; Growth') || !html.includes('Indian Journal of Law and Society') || !html.includes('Publications') || !html.includes('US20240303568A1')) throw new Error('Prerender missing profile content')
await writeFile('dist/index.html', template.replace('<div id="root">', '<div id="root" data-prerendered="true">').replace('<!--app-html-->', html))
console.log('Rendered complete profile, career, press, patent, research, impact and recommendations into HTML.')
