import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'

function RouteHandler() {
  const location = useLocation()
  
  useEffect(() => {
    // Clean up any legacy hash fragment in URL bar
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }

    // Map URL sub-paths to in-page section IDs for seamless navigation & deep-linking
    const pathMap = {
      '/about': 'narrative',
      '/narrative': 'narrative',
      '/experience': 'experience',
      '/timeline': 'experience',
      '/spotlight': 'spotlight',
      '/publications': 'spotlight',
      '/patent': 'patent',
      '/patents': 'patent',
      '/research': 'research',
      '/citations': 'research',
      '/impact': 'impact',
      '/philosophy': 'philosophy',
      '/contact': 'contact'
    }

    const sectionId = pathMap[location.pathname]
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/narrative" element={<Home />} />
      <Route path="/experience" element={<Home />} />
      <Route path="/timeline" element={<Home />} />
      <Route path="/spotlight" element={<Home />} />
      <Route path="/publications" element={<Home />} />
      <Route path="/patent" element={<Home />} />
      <Route path="/patents" element={<Home />} />
      <Route path="/research" element={<Home />} />
      <Route path="/citations" element={<Home />} />
      <Route path="/impact" element={<Home />} />
      <Route path="/philosophy" element={<Home />} />
      <Route path="/contact" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <RouteHandler />
      </div>
    </Router>
  )
}

export default App
