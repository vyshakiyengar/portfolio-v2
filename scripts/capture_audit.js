import puppeteer from 'puppeteer'
import path from 'path'
import fs from 'fs'

const outputDir = '/Users/vyshakiyengar/.gemini/antigravity/brain/7007c468-5fea-4de0-b9ec-98c5819701ed/audit_screenshots'
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
}

const htmlPath = 'file://' + path.resolve('/Users/vyshakiyengar/Desktop/Code/vibe coding/portfolio/dist/index.html')

async function runAudit() {
    console.log('Launching browser to audit dist build directly...')
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files']
    })

    const page = await browser.newPage()

    // 1. Desktop Audit (1440 x 900, Retina 2x)
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 })
    await page.goto(htmlPath, { waitUntil: 'networkidle0', timeout: 30000 })
    await new Promise(r => setTimeout(r, 1000))

    // Full page desktop
    await page.screenshot({ path: path.join(outputDir, '01_desktop_fullpage.png'), fullPage: true })
    console.log('Captured 01_desktop_fullpage.png')

    // Capture individual sections
    const sections = [
        { id: '#hero', name: '02_desktop_hero.png' },
        { id: '#narrative', name: '03_desktop_narrative.png' },
        { id: '#experience', name: '04_desktop_timeline.png' },
        { id: '#spotlight', name: '05_desktop_spotlight.png' },
        { id: '#impact', name: '06_desktop_impact.png' },
        { id: '#philosophy', name: '07_desktop_values.png' },
        { id: '.recommendations-section', name: '08_desktop_recommendations.png' },
        { id: '#contact', name: '09_desktop_contact.png' }
    ]

    for (const sec of sections) {
        try {
            const el = await page.$(sec.id)
            if (el) {
                await el.screenshot({ path: path.join(outputDir, sec.name) })
                console.log(`Captured ${sec.name}`)
            }
        } catch (e) {
            console.error(`Error capturing ${sec.id}:`, e.message)
        }
    }

    // Test Hover states on Desktop
    try {
        const firstCard = await page.$('.timeline-v-row')
        if (firstCard) {
            await firstCard.hover()
            await new Promise(r => setTimeout(r, 400))
            await firstCard.screenshot({ path: path.join(outputDir, '04_hover_timeline_card.png') })
            console.log('Captured 04_hover_timeline_card.png')
        }

        const firstSpotlight = await page.$('.builder-card')
        if (firstSpotlight) {
            await firstSpotlight.hover()
            await new Promise(r => setTimeout(r, 400))
            await firstSpotlight.screenshot({ path: path.join(outputDir, '05_hover_spotlight_card.png') })
            console.log('Captured 05_hover_spotlight_card.png')
        }
    } catch (e) {
        console.error('Hover test failed:', e.message)
    }

    // 2. Mobile Audit (iPhone 14 Pro: 393 x 852, Retina 2x)
    await page.setViewport({ width: 393, height: 852, deviceScaleFactor: 2, isMobile: true, hasTouch: true })
    await page.goto(htmlPath, { waitUntil: 'networkidle0', timeout: 30000 })
    await new Promise(r => setTimeout(r, 1000))

    await page.screenshot({ path: path.join(outputDir, '10_mobile_fullpage.png'), fullPage: true })
    console.log('Captured 10_mobile_fullpage.png')

    // Test Mobile Menu Open
    try {
        const toggle = await page.$('.mobile-toggle')
        if (toggle) {
            await toggle.click()
            await new Promise(r => setTimeout(r, 500))
            await page.screenshot({ path: path.join(outputDir, '11_mobile_menu_open.png') })
            console.log('Captured 11_mobile_menu_open.png')
        }
    } catch (e) {
        console.error('Mobile menu test error:', e.message)
    }

    // Check for any horizontal overflow / layout shift bugs
    const overflowBug = await page.evaluate(() => {
        const docWidth = document.documentElement.offsetWidth
        const windowWidth = window.innerWidth
        return docWidth > windowWidth
    })
    console.log(`Horizontal overflow check: ${overflowBug ? 'FAIL - horizontal scroll detected' : 'PASS - zero horizontal overflow'}`)

    await browser.close()
    console.log('All visual audit screenshots and tests completed!')
}

runAudit().catch(err => {
    console.error('Audit failed:', err)
    process.exit(1)
})
