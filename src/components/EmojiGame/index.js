/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    isGameInProgress: true,
    topScore: 0,
  }

  restartGame = () => {
    this.setState({isGameInProgress: true, clickedEmojis: []})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWon = clickedEmojis.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojis.length}
        onPlayAgain={this.restartGame}
      />
    )
  }

  finishAndSetTopScore = currentScore => {
    const {topScore} = this.state
    if (currentScore > topScore) {
      this.setState({topScore: currentScore})
    }
    this.setState({isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isEmojiClicked = clickedEmojis.includes(id)

    if (isEmojiClicked) {
      this.finishAndSetTopScore(clickedEmojis.length)
    } else {
      if (emojisList.length - 1 === clickedEmojis.length) {
        this.finishAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  getshuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getshuffledEmojisList()

    return (
      <ul className="emoji-list-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojis, isGameInProgress, topScore} = this.state
    return (
      <div className="bg-container">
        <NavBar
          isGameInProgress={isGameInProgress}
          topScore={topScore}
          currentScore={clickedEmojis.length}
        />
        <div className="body-container">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
