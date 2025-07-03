import { Component } from "react";
import { v4 } from "uuid";
import PasswordItem from "../PasswordItem";
import NoPasswordCard from "../NoPasswordCard";
import "./index.css";

const websiteLogoColors = [
  "website-avatar-color1",
  "website-avatar-color2",
  "website-avatar-color3",
  "website-avatar-color4",
  "website-avatar-color5",
  "website-avatar-color6",
  "website-avatar-color7",
];

export default class PasswordManager extends Component {
  state = {
    displayPassword: false,
    passwordsList: [],
    website: "",
    userName: "",
    password: "",
    searchInput: "",
  };

  toggleShowPasswords = () => {
    this.setState((prevState) => ({
      displayPassword: !prevState.displayPassword,
    }));
  };

  onUsernameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  onWebsiteChange = (event) => {
    this.setState({
      website: event.target.value,
    });
  };

  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  onDelete = (id) => {
    const { passwordsList } = this.state;
    const updatedList = passwordsList.filter((item) => item.id !== id);
    this.setState({
      passwordsList: updatedList,
    });
  };

  onAddPassword = (event) => {
    event.preventDefault();
    const { website, userName, password } = this.state;
    const index = Math.floor(Math.random() * websiteLogoColors.length);
    if (
      website.trim() !== "" &&
      userName.trim() !== "" &&
      password.trim() !== ""
    ) {
      const passwordDetails = {
        id: v4(),
        website,
        userName,
        password,
        colorClass: websiteLogoColors[index],
      };
      this.setState((prevState) => ({
        passwordsList: [...prevState.passwordsList, passwordDetails],
        userName: "",
        password: "",
        website: "",
      }));
    }
  };

  onSearch = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const {
      displayPassword,
      passwordsList,
      userName,
      website,
      password,
      searchInput,
    } = this.state;

    const count = passwordsList.length;
    const filteredList = passwordsList.filter((item) =>
      item.website.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="wrapper">
        <div className="main-cnt">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />

          <div className="top-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="pswd-img sm-img"
            />
            <form onSubmit={this.onAddPassword} className="form-card">
              <h1 className="form-title">Add new Password</h1>
              <div className="input-cnt">
                <div className="input-img-cnt">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-logo"
                  />
                </div>

                <input
                  id="website-input"
                  value={website}
                  type="text"
                  className="input"
                  placeholder="Enter Website"
                  onChange={this.onWebsiteChange}
                />
              </div>
              <div className="input-cnt">
                <div className="input-img-cnt">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="input-logo"
                  />
                </div>

                <input
                  id="username-input"
                  value={userName}
                  type="text"
                  className="input"
                  placeholder="Enter Username"
                  onChange={this.onUsernameChange}
                />
              </div>
              <div className="input-cnt">
                <div className="input-img-cnt">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="input-logo"
                  />
                </div>

                <input
                  id="password-input"
                  value={password}
                  type="password"
                  className="input"
                  placeholder="Enter Password"
                  onChange={this.onPasswordChange}
                />
              </div>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <div className="img-cnt">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="pswd-img lg-img"
              />
            </div>
          </div>

          <div className="password-cnt">
            <div className="header">
              <h1 className="password-cnt-title">
                Your Passwords{" "}
                <span className="count">
                  <p>{count}</p>
                </span>
              </h1>
              <div className="search-input-cnt">
                <div className="input-img-cnt search-img-cnt">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="input-logo"
                  />
                </div>

                <input
                  id="search-input"
                  value={searchInput}
                  type="search"
                  className="search-input"
                  placeholder="Search"
                  onChange={this.onSearch}
                />
              </div>
            </div>
            <div className="show-passwords-cnt">
              <input
                type="checkbox"
                id="checkbox"
                className="checkbox"
                onChange={this.toggleShowPasswords}
              />
              <label htmlFor="checkbox" className="checkbox-label">
                Show Passwords
              </label>
            </div>

            {filteredList.length === 0 ? (
              <NoPasswordCard />
            ) : (
              <ul className="passwords-list-cnt">
                {filteredList.map((passwordItem) => (
                  <PasswordItem
                    displayPassword={displayPassword}
                    key={passwordItem.id}
                    passwordDetails={passwordItem}
                    onDelete={this.onDelete}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}
