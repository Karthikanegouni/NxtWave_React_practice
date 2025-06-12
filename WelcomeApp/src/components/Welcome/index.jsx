import React, {Component} from 'react'
import './index.css'

class WelcomeApp extends Component {
  state = {buttonText: 'Subscribe'}

  handleClick = () => {
    this.setState(prevState => ({
      buttonText:
        prevState.buttonText === 'Subscribe' ? 'Subscribed' : 'Subscribe',
    }))
  }

  render() {
    const {buttonText} = this.state
    return (
      <div className="welcome-container">
        <h1 className="welcome-title">Welcome</h1>
        <p className="welcome-subtitle">Thank you! Happy Learning</p>
        <button
          type="button"
          className="subscribe-button"
          onClick={this.handleClick}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default WelcomeApp
