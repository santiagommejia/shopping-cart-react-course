import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartApp } from './CartApp'
import './styles/list.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>    
      <CartApp />
    </StrictMode>,
  </BrowserRouter>
)
