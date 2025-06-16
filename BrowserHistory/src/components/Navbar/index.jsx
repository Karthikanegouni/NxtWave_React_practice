import "./index.css";

const Navbar = (props) => {
  const { onSearch } = props;
  const onSearchInput = (event) => {
    onSearch(event.target.value);
  };

  return (
    <nav>
      <img
        src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
        alt="app logo"
        className="app-logo"
      />
      <div className="search-cnt">
        <div className="search-icon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
          />
        </div>
        <input
          type="search"
          onChange={onSearchInput}
          className="input"
          placeholder="Search history"
        />
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
