import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Greeting ,Rule,Circle } from './Greeting.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Greeting/>
    <Rule />
    <Circle />
  </StrictMode>,
)
