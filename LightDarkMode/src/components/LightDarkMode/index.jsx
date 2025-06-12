import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onbtnClick = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClass = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className={`card ${modeClass}`}>
        <h1>Click to change Mode</h1>
        <button type="button" onClick={this.onbtnClick}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
