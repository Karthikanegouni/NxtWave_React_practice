import "./index.css";

export default function NavBar({ timer, score }) {
  return (
    <div className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="app-logo"
      />

      <ul className="right">
        <li className="score-cnt">
          <p className="score-title">Score:</p>
          <p className="active-text">{score}</p>
        </li>
        <li className="timer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo"
          />
          <p className="active-text">{timer} sec</p>
        </li>
      </ul>
    </div>
  );
}
