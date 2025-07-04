import { Component } from "react";
import NavBar from "../NavBar";

export default class MatchGame extends Component {
  state = {
    score: 0,
    timer: 60,
  };
  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(this.startTimer, 1000);
  }


  render() {
    const { score, timer } = this.state;
    return (
      <div>
        <NavBar score={score} timer={timer} />
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
}
