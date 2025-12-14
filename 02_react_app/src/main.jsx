import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Greeting ,Rule,Circle } from './Greeting.jsx'
import { P05A1F1 ,P05A1F2} from './P05_A1.jsx'
import { P05A2F1,P05A2F2,P05A2F3,P05A2F4 } from './P05_A2.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Greeting/>
    <Rule />
    <Circle />
    <P05A1F1 />
    <P05A1F2 />
    <P05A2F1 />
    <P05A2F2 />
    <P05A2F3/>
    <P05A2F4/>

  </StrictMode>,
)
