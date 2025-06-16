import { Component } from "react";
import DestinationItem from "../DestinationItem/";
import "./index.css";

class DestinationSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    };
  }

  onSearch = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { destinationsList } = this.props;
    const { searchInput } = this.state;

    const filteredDestinationList = destinationsList.filter((eachItem) =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase().trim())
    );

    return (
      <div className="blur-bg-wrapper">
        <div className="blur-bg"></div>
        <div className="search-main-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              value={searchInput}
              onChange={this.onSearch}
              placeholder="Search destinations"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <ul className="destination-cnt">
            {filteredDestinationList.map((eachItem) => (
              <DestinationItem destinationItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default DestinationSearch;
