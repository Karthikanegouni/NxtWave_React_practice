import "./index.css";

export default function NavBar({ timer, score }) {
  return (
    <div className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="app-logo"
      />

      <div className="right">
        <p className="score-title">
          Score:<p className="active-text">{score}</p>
        </p>
        <div className="timer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo"
          />
          <p className="active-text">{timer}</p>
        </div>
      </div>
    </div>
  );
}
