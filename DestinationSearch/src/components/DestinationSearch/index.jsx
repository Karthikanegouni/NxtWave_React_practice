import { Component } from "react";
import DestinationItem from "../DestinationItem/";
import "./index.css";

class DestinationSearch extends Component {
  initialDestinationList = this.props.destinationsList;
  state = {
    filteredDestinationList: this.props.destinationsList,
    searchInput: "",
  };

  onSearch = (event) => {
    this.setState({
      searchInput: event.target.value,
      filteredDestinationList: this.initialDestinationList.filter((eachItem) =>
        eachItem.name.toLowerCase().includes(event.target.value.toLowerCase())
      ),
    });
  };

  render() {
    const { filteredDestinationList, searchInput } = this.state;
    return (
      <div className="blur-bg-wrapper">
        <div className="blur-bg"></div>
        <div className="search-main-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input type="search" value={searchInput} onChange={this.onSearch} />
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
