import {Component} from 'react'
import {
  GameContainer,
  ChoiceContainer,
  ResultContainer,
  ResultImage,
  StyledButton,
  PlayerContainer,
  ResultMainContainer,
  Message,
} from './styledComponents'
import Header from '../Header'
import ChoiceItem from '../ChoiceItem'
import Rules from '../Rules'

const gameStates = {
  winningStates: ['RS', 'SP', 'PR'],
  drawStates: ['RR', 'PP', 'SS'],
  losingStates: ['SR', 'PS', 'RP'],
}

const resultConstants = {
  won: 'YOU WON',
  lose: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

class Game extends Component {
  state = {
    score: 0,
    isPlaying: true,
    userChoice: '',
    cpuChoice: '',
    result: '',
  }

  playAgain = () => {
    this.setState({
      isPlaying: true,
      userChoice: '',
      cpuChoice: '',
      result: '',
    })
  }

  setUserChoice = choice => {
    this.setState({userChoice: choice[0]}, this.setCpuChoice)
  }

  setCpuChoice = () => {
    const choices = ['R', 'P', 'S']
    const index = Math.floor(Math.random() * 3)
    const cpuChoice = choices[index]

    this.setState({cpuChoice}, this.getResult)
  }

  getResult = () => {
    const {userChoice, cpuChoice} = this.state
    const currentState = userChoice + cpuChoice

    this.setState({isPlaying: false})

    if (gameStates.winningStates.includes(currentState)) {
      this.setState(prev => ({
        score: prev.score + 1,
        result: resultConstants.won,
      }))
    } else if (gameStates.losingStates.includes(currentState)) {
      this.setState(prev => ({
        score: prev.score - 1,
        result: resultConstants.lose,
      }))
    } else if (gameStates.drawStates.includes(currentState)) {
      this.setState({result: resultConstants.draw})
    }
  }

  renderGameView = () => {
    const {choicesList} = this.props
    return (
      <ChoiceContainer>
        {choicesList.map(item => (
          <ChoiceItem
            key={item.id}
            data={item}
            setUserChoice={this.setUserChoice}
          />
        ))}
      </ChoiceContainer>
    )
  }

  renderResultView = () => {
    const {choicesList} = this.props
    const {result, userChoice, cpuChoice} = this.state

    const userSelected = choicesList.find(item => item.id[0] === userChoice)
    const cpuSelected = choicesList.find(item => item.id[0] === cpuChoice)

    return (
      <ResultMainContainer>
        <ResultContainer>
          <PlayerContainer>
            <p>YOU</p>
            <ResultImage src={userSelected.imageUrl} alt="your choice" />
          </PlayerContainer>
          <PlayerContainer>
            <p>OPPONENT</p>
            <ResultImage src={cpuSelected.imageUrl} alt="opponent choice" />
          </PlayerContainer>
        </ResultContainer>
        <Message>{result}</Message>
        <StyledButton type="button" onClick={this.playAgain}>
          PLAY AGAIN
        </StyledButton>
      </ResultMainContainer>
    )
  }

  render() {
    const {score, isPlaying} = this.state

    return (
      <GameContainer>
        <Header score={score} />
        {isPlaying ? this.renderGameView() : this.renderResultView()}
        <Rules />
      </GameContainer>
    )
  }
}

export default Game
