import "./index.css";

const SuggestionItem = (props) => {
  const { suggestionItem, onSuggestionSelect } = props;
  const { suggestion } = suggestionItem;

  const selectSuggestion = ()=>{
        onSuggestionSelect(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p>{suggestion}</p>
      <img
        onClick={selectSuggestion}
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
      />
    </li>
  );
};


export default SuggestionItem;
