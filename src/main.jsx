import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { motionEnabled } from './lib/motion.js'

// Enables the JS-only motion layer without ever hiding content when
// scripts are unavailable.
document.documentElement.classList.add('js')

// Motion runs by default, including on machines whose OS reports
// `prefers-reduced-motion: reduce`. Applying the class before the first paint
// keeps CSS, the reveal observer and the hero hooks on the same state.
if (motionEnabled()) document.documentElement.classList.add('motion-on')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
