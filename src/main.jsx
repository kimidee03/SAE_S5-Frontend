import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/style/index.css'
import App from './App.jsx'
import { VisitorProvider } from './context/VisitorContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VisitorProvider>
      <App />
    </VisitorProvider>

  </StrictMode>,
)
