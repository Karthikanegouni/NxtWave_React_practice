import './index.css'
import {Component} from 'react'

class SpeedoMeter extends Component {
  state = {speed: 0}

accelerate=()=>{
  const {speed} = this.state
  if(speed<200){
      this.setState((prev)=>(
    {speed:prev.speed+10}
  ))
  }
}
 
 brake=()=>{
  const {speed} = this.state
  if(speed>0){
      this.setState((prev)=>(
    {speed:prev.speed-10}
  ))
  }
}

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="text">Speed is {speed}mph</h1>
        <p className="rules">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-cnt">
          <button type="button" onClick={this.accelerate}>
            Accelerate
          </button>
          <button type="button" onClick={this.brake}>Apply Brake</button>
        </div>
      </div>
    )
  }
}

export default SpeedoMeter
