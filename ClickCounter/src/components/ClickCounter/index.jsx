import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {clickcount: 0}

 clickedBtn =()=>{
  this.setState((prev)=>({clickcount:prev.clickcount+1}))
}

  render() {
    const {clickcount} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span>{clickcount}</span> times
        </h1>
        <p>Click the button to increase the count</p>
        <button type="button" onClick={this.clickedBtn}>Click Me!</button>
      </div>
    )
  }
}

export default ClickCounter
