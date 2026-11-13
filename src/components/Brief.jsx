import SectionMark from './SectionMark'

// The profile at a glance: six short lines, each linking to its evidence further down.
const items = [
  { label: 'Meta', href: '#experience', text: 'Led product strategy and growth for App Ads, helping double the business’s revenue.' },
  { label: 'Consulting', href: '#experience', text: 'Strategy consultant at BCG and Accenture.' },
  { label: 'Products', href: '#products', text: 'Built SpeechOn, used in 38 countries; Sahayaka, a WhatsApp voice agent; and PrepForCase, a free case interview course.' },
  { label: 'Patent', href: '#patent', text: 'Co-inventor on a granted US patent.' },
  { label: 'BluFin Foundation', href: '#impact', text: 'Co-founded one of India’s leading foundations building an inclusive sports ecosystem.' },
  { label: 'Policy', href: '#impact', text: 'Advised a Member of Parliament on technology and startup policy.' },
]

export default function Brief() {
  return (
    <section className="brief-section" id="brief" aria-label="In brief">
      <div className="container">
        <SectionMark label="In brief" />
        <ul className="brief-grid" data-reveal>
          {items.map((item, i) => (
            <li key={item.label} style={{ '--i': i }}>
              <a href={item.href}>
                <span className="brief-label">{item.label}</span>
                <span className="brief-fact">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
