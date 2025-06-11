import { Component } from "react";
import Login from "../Login";
import Logout from "../Logout";
import Message from "../Message";
import "./index.css";

class Home extends Component {
  state = {
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  onLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;
    

    return (
      <div className="home-container">
        <Message isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <Logout onLogout={this.onLogout} />
        ) : (
          <Login onLogin={this.onLogin} />
        )}
      </div>
    );
  }
}

export default Home;
