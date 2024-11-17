// Write your code here.

import './index.css'

const wonImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {score, isWon, onPlayAgain} = props

  const imgUrl = isWon ? wonImg : loseImg
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="card-container">
      <div className="score-container">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="game-score">{score}/12</p>
        <button className="play-button" type="button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img className="game-img" src={imgUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
