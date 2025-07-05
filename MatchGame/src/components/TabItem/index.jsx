import "./index.css";

export default function TabItem({ tabItem, isActiveTab, setActiveTab }) {
  const { tabId, displayText } = tabItem;
  const activetabStyle = isActiveTab ? "active-tab" : "";

  const onSelectTab = () => {
    setActiveTab(tabId);
  };

  return (
    <li className="tab-item-cnt">
      <button
        type="button"
        onClick={onSelectTab}
        className={`tab-item ${activetabStyle}`}
      >
        {displayText}
      </button>
    </li>
  );
}
