import { Component } from "react";
import "./index.css";
class CoinToss extends Component {
  state = {
    result: 0,
    headsCount: 0,
    tailsCount: 0,
  };

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2);
    this.setState((prev) => ({
      result: tossResult,
      headsCount: tossResult === 0 ? prev.headsCount + 1 : prev.headsCount,
      tailsCount: tossResult === 1 ? prev.tailsCount + 1 : prev.tailsCount,
    }));
  };

  render() {
    const { result, headsCount, tailsCount } = this.state;

    return (
      <div className="bg-cnt">
        <div className="toss-card">
          <h1 className="title">Coin Toss Game</h1>
          <p className="info">Heads (or) Tails</p>

          {result === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="toss-result-img"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="toss-result-img"
            />
          )}

          <button type="button" className="toss-btn" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="game-stats">
            <p className="stats">Total: {headsCount + tailsCount}</p>
            <p className="stats">Heads: {headsCount}</p>
            <p className="stats">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CoinToss;
