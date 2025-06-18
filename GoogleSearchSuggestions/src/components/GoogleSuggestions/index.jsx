import { Component } from "react";
import SuggestionItem from "../SuggestionItem";
import "./index.css";

class GoogleSuggestions extends Component {
  constructor(props){
    super(props)
    this.state = {
    searchInput: "",
    initialSuggestionList: props.suggestionsList,
  };
  }
  

  onSearchChange = (suggestion) => {
    this.setState({
      searchInput: suggestion,
    });
  };

  onSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const { initialSuggestionList, searchInput} = this.state;
    const filteredSugesstionsList = initialSuggestionList.filter((eachItem) =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase())
    );
    return (
      <div className="main-container">
        <img
          className="google-logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />

        <div className="search-cnt">
          <div className="input-container">
            <img
              className="seacrh-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.onSearchInput}
            />
          </div>
          {
            <ul className="list-container">
              {filteredSugesstionsList.slice(0, 6).map((eachItem) => (
                <SuggestionItem
                  suggestionItem={eachItem}
                  onSuggestionSelect={this.onSearchChange}
                  key={eachItem.id}
                />
              ))}
            </ul>
          }
        </div>
      </div>
    );
  }
}

export default GoogleSuggestions;
