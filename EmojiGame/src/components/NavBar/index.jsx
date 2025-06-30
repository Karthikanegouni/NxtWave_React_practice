import './index.css'

function NavBar(props) {
  const {score, topScore, isPlaying} = props
  return (
    <nav className="nav-bar">
      <div className="app-logo-cnt">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="app-logo"
        />
        <h1 className="logo-text">Emoji Game</h1>
      </div>
      {isPlaying && (
        <div className="nav-links-cnt">
          <p className="score-text">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
