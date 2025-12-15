import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Greeting ,Rule,Circle } from './Greeting.jsx'
import { P05A1F1 ,P05A1F2} from './P05_A1.jsx'
import { P05A2F1,P05A2F2,P05A2F3,P05A2F4} from './P05_A2.jsx'
import { P06F1,P06F2 ,P06F3,P06F4
} from './P06.jsx'


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
    <P06F1/>
    <P06F2/>
    <P06F3/>
    <P06F4/>




  </StrictMode>,
)
