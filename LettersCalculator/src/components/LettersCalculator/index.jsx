import { Component } from "react";
import "./index.css";

class LettersCalculator extends Component {
  state = {
    textInput: "",
  };

  ontextchange = (event) => {
    this.setState({
      textInput: event.target.value,
    });
    
  };

  render() {
    const { textInput } = this.state;
    return (
      <div className="main-cnt">
        <div className="left-section">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="input-ele">Enter the phrase</label>
          <input
            onChange={this.ontextchange}
            type="text"
            id="input-ele"
            className="input"
            placeholder="Enter the phrase"
          />
          <div className="count-display">No.of letters: {textInput.length}</div>
        </div>
        <div className="right-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default LettersCalculator;
