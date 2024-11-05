import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dice from './dobbel.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dice />
  </StrictMode>,
)
