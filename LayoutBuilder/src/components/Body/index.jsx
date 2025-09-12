import {useContext} from 'react'
import LayoutContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const {showContent, showLeftNavbar, showRightNavbar} =
    useContext(LayoutContext)

  const renderLeftNavbar = () => (
    <div className="left-navbar">
      <h1 className="body-section-title">Left Navbar Menu </h1>
      <ul className="items-cnt">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  )

  const renderContent = () => (
    <div className="content-cnt">
      <h1 className="body-section-title">Content</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit at, unde,
        officiis molestiae, architecto error doloribus laboriosam ducimus
        voluptatum laborum possimus rerum dolores aspernatur delectus.
      </p>
    </div>
  )

  const renderRightNavbar = () => (
    <div className="right-navbar">
      <h1 className="body-section-title">Right Navbar</h1>
      <div className="ad-cnt">Ad 1</div>
      <div className="ad-cnt">Ad 2</div>
    </div>
  )

  return (
    <div className="body-cnt">
      {showLeftNavbar && renderLeftNavbar()}
      {showContent && renderContent()}
      {showRightNavbar && renderRightNavbar()}
    </div>
  )
}

export default Body
