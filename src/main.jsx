import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App' // On enlève l'extension .tsx
import './index.css'

// On supprime le point d'exclamation '!' qui bloquait JavaScript
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)