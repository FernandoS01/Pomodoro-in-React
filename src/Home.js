import { useState } from 'react'
import  Timer from './Components/Timer'
import App  from './Components/App'
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
            rest ? <App /> : <Timer />
        }
        </div>
        </div>
    )
}