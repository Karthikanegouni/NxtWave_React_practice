import { useContext } from "react"
import LayoutContext from "../../context/ConfigurationContext"
import "./index.css"

const ConfigurationController = () => {
  const {
    showContent,
    showLeftNavbar,
    showRightNavbar,
    onToggleShowContent,
    onToggleShowLeftNavbar,
    onToggleShowRightNavbar,
  } = useContext(LayoutContext)

  return (
    <div className="configuration-cnt">
      <h1>Layout</h1>
      <div className="configuration-list-cnt">
        <div className="control-item">
          <input
            type="checkbox"
            id="content"
            checked={showContent}
            onChange={onToggleShowContent}
          />
          <label htmlFor="content">Content</label>
        </div>
        <div className="control-item">
          <input
            type="checkbox"
            id="left-navbar"
            checked={showLeftNavbar}
            onChange={onToggleShowLeftNavbar}
          />
          <label htmlFor="left-navbar">Left Navbar</label>
        </div>
        <div className="control-item">
          <input
            type="checkbox"
            id="right-navbar"
            checked={showRightNavbar}
            onChange={onToggleShowRightNavbar}
          />
          <label htmlFor="right-navbar">Right Navbar</label>
        </div>
      </div>
    </div>
  )
}

export default ConfigurationController
