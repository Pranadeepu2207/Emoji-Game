// Write your code here.
import './index.css'

const NavBar = props => {
  const {isGameInProgress, topScore, currentScore} = props

  return (
    <nav className="nav-container">
      <div className="nav-img-heading">
        <img
          className="nav-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="nav-heading">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="scores-container">
          <p className="score">Score: {currentScore}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
