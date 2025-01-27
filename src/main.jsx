// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Portfolio from './App.jsx'  // Change this line

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />  // And this line
  </StrictMode>
)