import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Greeting ,Rule,Circle } from './Greeting.jsx'
import { P05A1F1 ,P05A1F2} from './P05_A1.jsx'
import { P05A2F1,P05A2F2,P05A2F3,P05A2F4} from './P05_A2.jsx'
import { P06F1,P06F2 ,P06F3,P06F4
} from './P06.jsx';
//import { P06A1F1,P06A1F2 } from './P06_A1.jsx

import {P06A1F2} from './P06_A1.jsx'
import { P06A2F1 ,P06A2F2} from './P06_A2.jsx'
import { P07F1,P07A1F1 ,P07A1F2} from './P07.jsx'
import { P08F1,P08F2,P08A1F1,P08A1F2,P08A1F3,P08A1F4} from './P08.jsx'
import { P09F1 } from './P09.jsx'
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
    
    <P06A1F2/>
    <P06A2F1/>
    <P06A2F2/>
    <P07F1/>
    <P07A1F1/>
    <P07A1F2/>
    <P08F1/>
    <P08F2/>
    <P08A1F1/>
    <P08A1F2/>
    <P08A1F3/>
    <P08A1F4/>
    <P09F1/>




  </StrictMode>,
)
