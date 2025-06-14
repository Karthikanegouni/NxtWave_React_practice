import { Component } from "react";
import "./index.css";

class RandomNumberGenerator extends Component {
    state={
        randomNumber:0
    }

    generateNumber=()=>{
        this.setState({
            randomNumber: Math.ceil(Math.random()*101)-1
        })
    }
  render() {
    const {randomNumber} = this.state;
    return (
      <div className="container">
        <h1 className="title">Random Number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <button type="button" className="button" onClick={this.generateNumber}>
          Generate
        </button>
        <p className="random-number">{randomNumber}</p>
      </div>
    );
  }
}

export default RandomNumberGenerator;
