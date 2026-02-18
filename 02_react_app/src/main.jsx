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
import { P09F1 ,Image} from './P09.jsx'
import {App} from './App.jsx'
import { P10F1,P10F3,P10A3,Menu } from './P10.jsx'
import {P12F1,P12F2,P12F3,P12F4,P12A3} from './P12.jsx'
import {P13F2} from './P13.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Menu/>
        <P12A3/>

    {/* <P12F1/>
    <P12F2/>
    <P12F3/>
    <P12F4/> */}
    <P10A3/>

   
    <P10F3/>
    <P10F1/>

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
       

    <Image/>
    <App/>
 {/* <P13F1/> */}
  <P13F2/>




  </StrictMode>,
)
