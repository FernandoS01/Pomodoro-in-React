import { useState } from 'react'
import  Pomodoro from './Components/Pomodoro'
import Rest  from './Components/Rest'
import './global.css'

export function Home(){
     const [rest,isRest] = useState(false)
    return(
        <div className='container-home'>
        <div className='box-buttons'>
        <button onClick={()=>isRest(false)}>Pomodoro</button>
        <button onClick={()=>isRest(true)}>Pausa</button>
        </div>
       <div> {
            rest ? <Rest /> : <Pomodoro />
        }
        </div>
        </div>
    )
}