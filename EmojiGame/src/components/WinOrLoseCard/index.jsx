import './index.css'

export default function WinOrLoseCard({gameResult, score, playAgain}) {
  const MAX_SCORE = 12
  const result = gameResult ? 'You Won' : 'You Lose'
  const scoreTitle = gameResult ? 'Best Score' : 'Score'
  const resultImgUrl = gameResult
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="result-card">
      <div className="result-image-cnt">
        <img src={resultImgUrl} alt="win or lose" className="result-img" />
      </div>
      <div className="score-cnt">
        <h1 className="status-text">{result}</h1>
        <p className="best-score-title">{scoreTitle}</p>
        <p className="best-score">
          {score}/{MAX_SCORE}
        </p>
        <button type="button" className="play-again-btn" onClick={playAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}
