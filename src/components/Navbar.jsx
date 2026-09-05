import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
const links = [
 ['About', 'narrative'], ['Experience', 'experience'], ['Spotlight', 'spotlight'],
 ['Impact', 'impact'], ['Philosophy', 'philosophy'], ['Contact', 'contact'],
]
export default function Navbar() {
 const [open, setOpen] = useState(false)
 const toggle = useRef(null)
 useEffect(() => {
   const close = event => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() } }
   document.addEventListener('keydown', close)
   return () => document.removeEventListener('keydown', close)
 }, [])
 return <>
   <a className="skip-link" href="#main-content">Skip to content</a>
   <header className="site-header">
     <nav className="container site-nav" aria-label="Main navigation">
       <a className="wordmark" href="#hero" onClick={() => setOpen(false)}>Vyshak K Iyengar<span>.</span></a>
       <button ref={toggle} className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
       <div id="navigation-links" className={`navigation-links ${open ? 'is-open' : ''}`}>
         {links.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
       </div>
     </nav>
   </header>
 </>
}
