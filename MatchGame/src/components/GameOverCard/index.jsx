import "./index.css";

export default function GameOverCard({ score, playAgain }) {
  return (
    <div className="game-over-card">
      <div className="trophy-cnt">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-img"
        />
      </div>
      <p className="game-over-title">YOUR SCORE</p>
      <p className="game-score">{score}</p>
      <button type="button" onClick={playAgain} className="play-again-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-logo"
        />
        PLAY AGAIN
      </button>
    </div>
  );
}
