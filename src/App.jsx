import { useEffect } from 'react'
import Home from './pages/Home'
const sections = {
 '/about': 'narrative', '/narrative': 'narrative', '/experience': 'experience', '/timeline': 'experience',
 '/spotlight': 'spotlight', '/publications': 'spotlight', '/patent': 'patent', '/patents': 'patent',
 '/research': 'research', '/citations': 'research', '/impact': 'impact', '/philosophy': 'philosophy',
 '/recommendations': 'recommendations', '/contact': 'contact',
}
export default function App() {
 useEffect(() => {
   const id = window.location.hash.slice(1) || sections[window.location.pathname.replace(/\/$/, '')]
   if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' }))
 }, [])
 return <Home />
}
