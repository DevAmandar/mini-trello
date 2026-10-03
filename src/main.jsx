import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'   // ← تغییر: BrowserRouter → HashRouter
import './index.css'
import App from './App.tsx'
import './variables.css'

createRoot(document.getElementById('root')).render(
    <HashRouter>
      <App />
    </HashRouter>
)