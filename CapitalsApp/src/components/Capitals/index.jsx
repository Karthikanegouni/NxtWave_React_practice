import { Component } from "react";
import "./index.css";

const countryAndCapitalsList = [
  {
    id: "NEW_DELHI",
    capitalDisplayText: "New Delhi",
    country: "India",
  },
  {
    id: "LONDON",
    capitalDisplayText: "London",
    country: "United Kingdom",
  },
  {
    id: "PARIS",
    capitalDisplayText: "Paris",
    country: "France",
  },
  {
    id: "KATHMANDU",
    capitalDisplayText: "Kathmandu",
    country: "Nepal",
  },
  {
    id: "HELSINKI",
    capitalDisplayText: "Helsinki",
    country: "Finland",
  },
];

class Capitals extends Component {
  state = {
    selectedCapitalId: countryAndCapitalsList[0].id,
  };

  updateCountry = (event) => {
    this.setState({
      selectedCapitalId: event.target.value,
    });
  };

  render() {
    const { selectedCapitalId } = this.state;
    const selectedCountry = countryAndCapitalsList.find(
      (item) => item.id === selectedCapitalId
    ).country;
    return (
      <div className="bg-cnt">
        <div className="card">
          <h1 className="title">Countries And Capitals</h1>
          <select
            name="Capital"
            id="Capital"
            onChange={this.updateCountry}
            value={selectedCapitalId}
            className="select-box"
          >
            {countryAndCapitalsList.map((option) => (
              <option value={option.id} key={option.id}>
                {option.capitalDisplayText}
              </option>
            ))}
          </select>
          <p className="info">is captial of which country?</p>
          <p className="country">{selectedCountry}</p>
        </div>
      </div>
    );
  }
}

export default Capitals;
