import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/dm-sans/wght.css'
import '@fontsource/libre-caslon-display/400.css'
import './styles/global.css'
import App from './App.jsx'
const root = document.getElementById('root')
const app = <StrictMode><App /></StrictMode>
if (root.dataset.prerendered) hydrateRoot(root, app)
else createRoot(root).render(app)
