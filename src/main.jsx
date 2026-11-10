import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayouts from './layouts/MainLayouts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayouts/>
  </StrictMode>,
)
