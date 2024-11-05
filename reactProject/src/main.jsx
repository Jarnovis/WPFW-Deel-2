import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dice from './dobbel.jsx'
import Lingo from './lingo.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lingo />
  </StrictMode>,
)
