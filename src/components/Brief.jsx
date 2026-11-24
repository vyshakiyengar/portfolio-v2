import { useEffect, useRef, useState } from 'react'
import SectionMark from './SectionMark'

// The profile at a glance: six short lines, each with a small chart of its own fact,
// each linking to its evidence further down. In every chart grey is context and the
// accent is Vyshak's part. The charts draw in when the grid is revealed and redraw on hover;
// the prerendered page shows them complete. On phones the six become a swipeable strip.

// Dots are drawn as zero-length strokes with round caps, which keeps the markup small.
const dots = points => points.map(([x, y]) => `M${x.toFixed(1)} ${y.toFixed(1)}h0`).join('')

// Blufin: 120 children in eight pool lanes of fifteen.
const childDots = dots(Array.from({ length: 120 }, (_, i) => [6 + (i % 15) * 6.6, 7 + Math.floor(i / 15) * 10]))
// Seven international para-athletes, a little ahead in their lanes.
const athletes = [[118, 7], [108, 17], [126, 27], [113, 37], [122, 57], [104, 67], [116, 77]]

// Policy: the 543 seats of the Lok Sabha as a hemicycle, one seat (top centre) picked out.
const house = (() => {
  const cx = 76, cy = 78, inner = 28, outer = 72, rows = 11, total = 543
  const radii = Array.from({ length: rows }, (_, i) => inner + (outer - inner) * i / (rows - 1))
  const sum = radii.reduce((a, b) => a + b, 0)
  const counts = radii.map(r => Math.round(total * r / sum))
  counts[rows - 1] += total - counts.reduce((a, b) => a + b, 0)
  const seats = []
  radii.forEach((r, row) => {
    const n = counts[row]
    for (let j = 0; j < n; j++) {
      const t = Math.PI * (1 - j / (n - 1))
      seats.push({ x: cx + r * Math.cos(t), y: cy - r * Math.sin(t), outer: row === rows - 1, gap: Math.abs(t - Math.PI / 2) })
    }
  })
  const pick = seats.reduce((best, s, i) => (s.outer && s.gap < seats[best].gap ? i : best), seats.findIndex(s => s.outer))
  return { seats: dots(seats.filter((_, i) => i !== pick).map(s => [s.x, s.y])), seat: seats[pick] }
})()

const Chart = ({ children }) => (
  <svg className="bc" viewBox="0 0 300 84" width="300" height="84" aria-hidden="true" focusable="false">{children}</svg>
)

const MetaChart = () => (
  <Chart>
    <path className="ln" d="M0 78.5H252" />
    <path className="ctx-dash" d="M4 54.5H252" />
    <path className="bc-fade area" style={{ '--d': '.9s' }} d="M4 54C54 54 84 51 122 44S194 32 224 30V78H4Z" />
    <path className="bc-draw acs thick" style={{ '--len': 240 }} d="M4 54C54 54 84 51 122 44S194 32 224 30" />
    <path className="bc-fade acs dotted" style={{ '--d': '1.3s' }} d="M224 33V78" />
    <circle className="ring" cx="4" cy="54" r="2.6" />
    <circle className="bc-fade ac" style={{ '--d': '1.4s' }} cx="224" cy="30" r="3.6" />
    <text className="lbl" x="4" y="45">1×</text>
    <text className="bc-fade big" style={{ '--d': '1.5s' }} x="236" y="38">2×</text>
  </Chart>
)

const ConsultingChart = () => (
  <Chart>
    <rect className="quad" x="42.5" y="4.5" width="38" height="38" />
    <path className="ln" d="M42.5 4.5V80.5M4.5 42.5H80.5" />
    <path className="ax" d="M4.5 2V80.5H83" />
    <path className="bc-fade ctx-dash" style={{ '--d': '.5s' }} d="M17 67Q38 52 61 24" />
    <circle className="bc-fade ctx" style={{ '--d': '.2s' }} cx="17" cy="67" r="2" />
    <circle className="bc-fade ctx" style={{ '--d': '.6s' }} cx="32" cy="55" r="2.7" />
    <circle className="bc-fade ac" style={{ '--d': '1s' }} cx="61" cy="24" r="4.8" />
  </Chart>
)

const ProductsChart = () => (
  <Chart>
    <g className="bc-fade" style={{ '--d': '.2s' }}>
      <rect className="app" x="4.5" y="2.5" width="55" height="55" rx="14" />
      <path className="acs glyph" d="M20 27V33M24 23V37M28 19V41M32 15V45M36 20V40M40 24V36M44 27V33" />
    </g>
    <g className="bc-fade" style={{ '--d': '.45s' }}>
      <rect className="app" x="80.5" y="2.5" width="55" height="55" rx="14" />
      <path className="acs" d="M98 19H118a4 4 0 0 1 4 4V35a4 4 0 0 1-4 4H104l-6 5v-5a4 4 0 0 1-4-4V23a4 4 0 0 1 4-4Z" />
      <path className="ac-dots" d="M102 29h0M108 29h0M114 29h0" />
    </g>
    <g className="bc-fade" style={{ '--d': '.7s' }}>
      <rect className="app" x="156.5" y="2.5" width="55" height="55" rx="14" />
      <rect className="acs" x="170" y="23" width="28" height="19" rx="3" />
      <path className="acs" d="M178 23V19.5a2 2 0 0 1 2-2H188a2 2 0 0 1 2 2V23M170 31H198" />
    </g>
    <text className="lbl" x="32" y="76" textAnchor="middle">SpeechOn</text>
    <text className="lbl" x="108" y="76" textAnchor="middle">Sahayaka</text>
    <text className="lbl" x="184" y="76" textAnchor="middle">PrepForCase</text>
  </Chart>
)

const PatentChart = () => (
  <Chart>
    <g className="bc-fade" style={{ '--d': '.2s' }}>
      <path className="fig" d="M30.5 42.5H60.5M60.5 16.5V68.5M60.5 16.5H78.5M60.5 68.5H78.5" />
      <rect className="fig box" x="4.5" y="29.5" width="26" height="26" />
      <rect className="fig box" x="78.5" y="3.5" width="26" height="26" />
      <rect className="fig box" x="78.5" y="55.5" width="26" height="26" />
    </g>
    <path className="bc-draw acs" style={{ '--len': 14, '--d': '.5s' }} d="M11.5 42.5H23.5" />
    <path className="bc-draw acs" style={{ '--len': 14, '--d': '.7s' }} d="M85.5 16.5H97.5" />
    <path className="bc-draw acs" style={{ '--len': 14, '--d': '.9s' }} d="M85.5 68.5H97.5" />
    <circle className="bc-fade ac" style={{ '--d': '.9s' }} cx="60.5" cy="42.5" r="2.7" />
    <text className="lbl small" x="4" y="22">102</text>
    <text className="lbl small" x="112" y="20">104</text>
    <text className="lbl small" x="112" y="72">106</text>
    <text className="lbl small caps" x="152" y="33">GRANTED</text>
    <text className="bc-fade num" style={{ '--d': '.8s' }} x="152" y="56">US 12,020,352</text>
  </Chart>
)

const BlufinChart = () => (
  <Chart>
    <path className="ln dotted" d="M0 12.5H136M0 22.5H136M0 32.5H136M0 42.5H136M0 52.5H136M0 62.5H136M0 72.5H136" />
    <path className="bc-fade ctx-dots" style={{ '--d': '.2s' }} d={childDots} />
    <path className="bc-fade ac-dots big-dots" style={{ '--d': '.9s' }} d={dots(athletes)} />
    <path className="ax" d="M136.5 1V83" />
    <circle className="ctx" cx="151" cy="24" r="2.2" />
    <text className="lbl" x="159" y="28"><tspan className="strong">120+</tspan> children trained</text>
    <circle className="ac" cx="151" cy="46" r="2.6" />
    <text className="lbl" x="159" y="50"><tspan className="strong accent">7</tspan> intl. para-athletes</text>
  </Chart>
)

const PolicyChart = () => {
  const { x, y } = house.seat
  return (
    <Chart>
      <path className="bc-fade seat-dots" style={{ '--d': '.2s' }} d={house.seats} />
      <path className="bc-draw acs" style={{ '--len': 80, '--d': '1s' }} d={`M${(x + 5).toFixed(1)} ${y.toFixed(1)}H156`} />
      <circle className="bc-fade ac" style={{ '--d': '.9s' }} cx={x.toFixed(1)} cy={y.toFixed(1)} r="3.4" />
      <text className="lbl strong" x="162" y="10">Bangalore South</text>
      <text className="lbl" x="162" y="26">1 of 543 Lok Sabha seats</text>
    </Chart>
  )
}

const items = [
  { label: 'Meta', href: '#experience', chart: MetaChart, text: 'Led product strategy and growth for App Ads, helping double the business’s revenue.' },
  { label: 'Consulting', href: '#experience', chart: ConsultingChart, text: 'Strategy consultant at BCG and Accenture.' },
  { label: 'Products', href: '#products', chart: ProductsChart, text: 'Built SpeechOn, used in 38 countries; Sahayaka, a WhatsApp voice agent; and PrepForCase, a free case interview course.' },
  { label: 'Patent', href: '#patent', chart: PatentChart, text: 'Co-inventor on a granted US patent.' },
  { label: 'Blufin Foundation', href: '#impact', chart: BlufinChart, text: 'Co-founded one of India’s leading foundations building an inclusive sports ecosystem.' },
  { label: 'Policy', href: '#impact', chart: PolicyChart, text: 'Advised a Member of Parliament on technology and startup policy.' },
]

export default function Brief() {
  const strip = useRef(null)
  const [shown, setShown] = useState(0)

  // On phones the grid scrolls sideways; the pager below it follows the card in view.
  useEffect(() => {
    const el = strip.current
    if (!el) return
    let frame = 0
    const measure = () => {
      frame = 0
      const card = el.firstElementChild
      if (!card || el.scrollWidth <= el.clientWidth) return
      const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || 0)
      const i = Math.min(items.length - 1, Math.round(el.scrollLeft / step))
      setShown(prev => (prev === i ? prev : i))
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(measure) }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => { el.removeEventListener('scroll', onScroll); if (frame) cancelAnimationFrame(frame) }
  }, [])

  return (
    <section className="brief-section" id="brief" aria-label="In brief">
      <div className="container">
        <SectionMark label="In brief" />
        <ul className="brief-grid" data-reveal ref={strip}>
          {items.map((item, i) => {
            const ItemChart = item.chart
            return (
              <li key={item.label} style={{ '--i': i }}>
                <a href={item.href}>
                  <ItemChart />
                  <span className="brief-label">{item.label}</span>
                  <span className="brief-fact">{item.text}</span>
                </a>
              </li>
            )
          })}
        </ul>
        <div className="brief-pager" aria-hidden="true">
          <span className="brief-pager-marks">
            {items.map((item, i) => <span key={item.label} className={i === shown ? 'is-on' : ''} />)}
          </span>
          <span>{shown + 1} of {items.length} · swipe</span>
        </div>
      </div>
    </section>
  )
}
