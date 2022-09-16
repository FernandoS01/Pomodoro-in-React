import './styles.css'
import { Component } from 'react'
import { Howl,Howler } from 'howler';
import Alarm from '../../Assets/beep.mp3'
import Tictac from '../../Assets/tictac.mp3'

class Timer extends Component {
    constructor(props){
        super(props);
        this.interval = ''
        this.state = {
            minute : 25,
            second: 0,
            buttonActive: false
        }
    }
    song(src){
        const sound = new Howl({
            src
        }) 
        sound.play()
    }
    start(){
        this.setState({ buttonActive: true })

        this.interval = setInterval(()=>{
                  this.song(Tictac)
                if(this.state.second > 0){ 
                    this.song(Tictac)
                    this.setState({ second: this.state.second - 1})
                }else if(this.state.minute > 0){
                        this.setState( {
                            second: 59,
                            minute: this.state.minute - 1})
                    } else {
                        clearInterval(this.interval)
                        this.song(Alarm)
                    }
        },1000)

        
    }

    pause(){
        this.setState({ buttonActive: false })

        clearInterval(this.interval)
    }

    reset(){
        this.setState({
            buttonActive: false,
            minute: 25,
            second: 0
        })
    }

    render(){
        return (
            <div className='container'>
            <div className='wrapper'>
                <h1>{this.state.minute}:</h1>
                <h1>{this.state.second}</h1>
            </div>
            <div className='box'>
                {
                    this.state.buttonActive ? <button disabled onClick={()=>this.start()}>Start</button> : <button onClick={()=>this.start()}>Start</button>
                }
                <button onClick={()=>this.pause()}>Pause</button>
                <button onClick={()=>this.reset()}>Reset</button>
            </div>
            </div>
        )
    }
}
export default Timer