import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    minutes: 25,
    seconds: 0,
    timerLimit: 25,
    isRunning: false,
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  updateTimer = () => {
    const {minutes, seconds} = this.state

    if (minutes === 0 && seconds === 0) {
      clearInterval(this.intervalId)
      this.setState({isRunning: false})
      return
    }

    if (seconds === 0) {
      this.setState(prev => ({
        seconds: 59,
        minutes: prev.minutes - 1,
      }))
    } else {
      this.setState(prev => ({seconds: prev.seconds - 1}))
    }
  }

  startTimer = () => {
    const {isRunning, minutes, seconds} = this.state

    if (isRunning) {
      clearInterval(this.intervalId)
      this.setState({isRunning: false})
    } else {
      if (minutes === 0 && seconds === 0) {
        return
      }
      this.setState({isRunning: true})
      this.intervalId = setInterval(this.updateTimer, 1000)
    }
  }

  resetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({
      seconds: 0,
      minutes: 25,
      isRunning: false,
      timerLimit: 25,
    })
  }

  increaseTimerlimit = () => {
    this.setState(prevState => {
      if (!prevState.isRunning) {
        return {
          timerLimit: prevState.timerLimit + 1,
          minutes: prevState.timerLimit + 1,
        }
      }
      return null
    })
  }

  decreaseTimerlimit = () => {
    this.setState(prevState => {
      if (!prevState.isRunning && prevState.timerLimit > 0) {
        return {
          timerLimit: prevState.timerLimit - 1,
          minutes: prevState.timerLimit - 1,
        }
      }
      return null
    })
  }
  render() {
    const {minutes, seconds, isRunning, timerLimit} = this.state
    const status = isRunning ? 'Running' : 'Paused'
    const mins = String(minutes).padStart(2, '0')
    const secs = String(seconds).padStart(2, '0')

    return (
      <div className="wrapper">
        <h1 className="main-title">Digital Timer</h1>

        <div className="timer-bottom-cnt">
          <div className="timer-bg">
            <div className="timer-cnt">
              <h1 className="timer">
                {mins}:{secs}
              </h1>
              <p className="status">{status}</p>
            </div>
          </div>

          <div className="controls-cnt">
            <div className="start-reset-cnt">
              <button
                type="button"
                className="play-pause-btn"
                onClick={this.startTimer}
              >
                <img
                  src={
                    !isRunning
                      ? 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                  }
                  alt={!isRunning ? 'play icon' : 'pause icon'}
                  className="play-pause-img"
                />
                {isRunning ? 'Pause' : 'Start'}
              </button>
              <button
                type="button"
                className="reset-btn"
                onClick={this.resetTimer}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="reset-img"
                />
                Reset
              </button>
            </div>
            <div className="timer-limit-cnt">
              <p className="timer-limit-heading">Set Timer limit</p>
              <div className="plus-minus-cnt">
                <button
                  type="button"
                  disabled={isRunning}
                  className="minus-plus-btns"
                  onClick={this.decreaseTimerlimit}
                >
                  -
                </button>
                <p className="timer-limit">{timerLimit}</p>
                <button
                  disabled={isRunning}
                  type="button"
                  className="minus-plus-btns"
                  onClick={this.increaseTimerlimit}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
