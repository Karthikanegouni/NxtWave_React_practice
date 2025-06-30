import { Component } from "react";
import NavBar from "../NavBar";
import EmojiCard from "../EmojiCard";
import WinOrLoseCard from "../WinOrLoseCard";
import "./index.css";

class EmojiGame extends Component {
  constructor(props) {
    super(props);
    const { emojisList } = this.props;
    this.state = {
      emojisList,
      score: 0,
      topScore: 0,
      isPlaying: true,
      cardsClickedList: [],
    };
  }

  checkGame = () => {
    const { score } = this.state;
    if (score === 12) {
      this.setState({
        isPlaying: false,
      });
    }
  };

  updateScore = (id) => {
    const { emojisList, score, cardsClickedList } = this.state;
    const cardClicked = cardsClickedList.some((emojiId) => emojiId === id);
    const maxScore = emojisList.length;
    if (score < maxScore && !cardClicked) {
      this.setState(
        (prevstate) => ({
          score: prevstate.score + 1,
          cardsClickedList: [...prevstate.cardsClickedList, id],
        }),
        this.checkGame
      );
    } else {
      this.setState({
        isPlaying: false,
      });
    }
  };

  shuffledEmojisList = () => {
    const { emojisList, isPlaying } = this.state;
    if (isPlaying) {
      const shuffledlist = emojisList.sort(() => Math.random() - 0.5);
      this.setState({
        emojisList: shuffledlist,
      });
    }
  };

  playAgain = () => {
    this.setState((prev) => {
      if (prev.topScore < prev.score) {
        return {
          topScore: prev.score,
          isPlaying: true,
          score: 0,
          cardsClickedList: [],
        };
      }
      return {
        score: 0,
        isPlaying: true,
        cardsClickedList: [],
      };
    });
  };

  render() {
    const { emojisList, score, topScore, isPlaying } = this.state;
    const gameWon = score > 11;

    return (
      <main className="emoji-Game-cnt">
        <NavBar score={score} topScore={topScore} isPlaying={isPlaying} />
        {isPlaying && (
          <p className="info">Try to win by clicking all emojis exactly once</p>
        )}

        {isPlaying ? (
          <ul className="emoji-cards-cnt">
            {emojisList.map((emoji) => (
              <EmojiCard
                key={emoji.id}
                emoji={emoji}
                shuffleCards={this.shuffledEmojisList}
                updateScore={this.updateScore}
              />
            ))}
          </ul>
        ) : (
          <WinOrLoseCard
            gameResult={gameWon}
            score={score}
            playAgain={this.playAgain}
          />
        )}
      </main>
    );
  }
}

export default EmojiGame;
