import { Component } from "react";
import "./index.css";

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  };

  toggleFirstName = () => {
    this.setState((prevState) => ({
      showFirstName: !prevState.showFirstName,
    }));
  };

  toggleLastName = () => {
    this.setState((prevState) => ({
      showLastName: !prevState.showLastName,
    }));
  };

  render() {
    const { showFirstName, showLastName } = this.state;

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="button-section">
            <button
              type="button"
              onClick={this.toggleFirstName}
              className="button"
            >
              Show/Hide Firstname
            </button>
            {showFirstName && <p className="name-card">Joe</p>}
          </div>
          <div className="button-section">
            <button
              type="button"
              onClick={this.toggleLastName}
              className="button"
            >
              Show/Hide Lastname
            </button>
            {showLastName && <p className="name-card">Jonas</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowHide;
