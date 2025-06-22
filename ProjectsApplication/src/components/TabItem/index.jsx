import "./index.css";

const TabItem = (props) => {
  const { tabDetails, updateActiveTab, isActiveTab } = props;
  const { tabId, displayText } = tabDetails;

  const ActiveTabClass = isActiveTab ? "active-tab-btn" : "";

  const onTabClick = () => {
    updateActiveTab(tabId);
  };

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${ActiveTabClass}`}
        onClick={onTabClick}
      >
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
