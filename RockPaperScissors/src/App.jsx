import "./App.css"
import Game from "./components/Game"

const choicesList = [
  {
    id: "ROCK",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png",
  },
  {
    id: "SCISSORS",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png",
  },
  {
    id: "PAPER",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png",
  },
]

const App = () => <Game choicesList={choicesList} />

export default App
