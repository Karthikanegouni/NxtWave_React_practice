import {Component} from 'react'
import './index.css'

export default class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    isRunning: false,
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  updateTimer = () => {
    this.setState(prevState => ({
      minutes:
        prevState.seconds === 59 ? prevState.minutes + 1 : prevState.minutes,
      seconds: prevState.seconds === 59 ? 0 : prevState.seconds + 1,
    }))
  }

  stopTimer = () => {
    const {isRunning} = this.state
    if (isRunning) {
      clearInterval(this.intervalID)
      this.setState({
        isRunning: false,
      })
    }
  }

  startTimer = () => {
    const {isRunning} = this.state
    if (isRunning) {
      return
    }
    this.intervalID = setInterval(this.updateTimer, 1000)
    this.setState({
      isRunning: true,
    })
  }

  onResetTimer = () => {
    clearInterval(this.intervalID)
    this.setState({
      minutes: 0,
      seconds: 0,
      isRunning: false,
    })
  }

  formatTime = countDown => String(countDown).padStart(2, '0')

  render() {
    const {seconds, minutes, isRunning} = this.state
    const secs = this.formatTime(seconds)
    const mins = this.formatTime(minutes)
    return (
      <div className="bg-wrapper">
        <div className="main-cnt">
          <h1 className="title">Stopwatch</h1>
          <div className="stopwatch-card">
            <div className="title-cnt">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stopwatch-img"
              />
              <h1 className="card-title">Timer</h1>
            </div>
            <h1 className="countdown">
              {mins}:{secs}
            </h1>
            <div className="btn-cnt">
              <button
                disabled={isRunning}
                type="button"
                className="btn start-btn"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                type="button"
                disabled={!isRunning}
                className="btn stop-btn"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn reset-btn"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
