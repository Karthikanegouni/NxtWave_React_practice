import "./index.css";

export default function Emojicard(props) {
  const { emoji, shuffleCards, updateScore } = props;
  const { id, emojiUrl, emojiName } = emoji;

  const onCardClick = () => {
    shuffleCards();
    updateScore(id);
  };

  return (
    <li>
      <button type="submit" className="emoji-card" onClick={onCardClick}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  );
}
