import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom/cjs/react-router-dom.min'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="header">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>

    <Popup
      trigger={
        <button
          type="button"
          data-testid="hamburgerIconButton"
          className="hamburger-btn"
        >
          <GiHamburgerMenu size={30} className="hamburger-icon" />
        </button>
      }
      modal
      className="popup-content"
    >
      {close => (
        <div className="modal">
          <button
            className="close-modal-btn"
            type="button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose size={30} color="#616e7c" />
          </button>
          <ul className="link-items-cnt">
            <li>
              <Link to="/" className="link-item" onClick={() => close()}>
                <AiFillHome />
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to="/about" className="link-item" onClick={() => close()}>
                <BsInfoCircleFill />
                <p>About</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default Header

