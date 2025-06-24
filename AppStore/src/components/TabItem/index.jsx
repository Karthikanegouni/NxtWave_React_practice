import "./index.css";

const TabItem = (props) => {
  const { tabDetails, isActive, updateActiveTab } = props;
  const { tabId, displayText } = tabDetails;
  const activeTabClass = isActive ? "active-tab" : "";

  const onTabClick = () => {
    updateActiveTab(tabId);
  };

  return (
    <li>
      <button className={`tab-item ${activeTabClass}`} onClick={onTabClick}>
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;

