import {Component} from 'react'
import './index.css'

export default class PasswordItem extends Component {
  deletePasswordItem = () => {
    const {passwordDetails, onDelete} = this.props
    const {id} = passwordDetails
    onDelete(id)
  }

  render() {
    const {passwordDetails, displayPassword} = this.props
    const {website, userName, password, colorClass} = passwordDetails
    const cleanUrl = website.replace('https://www.', '')
    const websiteLogo = cleanUrl[0].toUpperCase()

    return (
      <li className="password-item">
        <div className="left-cnt">
          <div className={`website-logo  ${colorClass}`}>{websiteLogo}</div>
          <div className="password-details-cnt">
            <p className="website-name">{cleanUrl}</p>
            <p className="user-name">{userName}</p>
            {displayPassword ? (
              <p className="password">{password}</p>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
                className="stars"
              />
            )}
          </div>
        </div>
        <button
          type="button"
          className="delete-btn"
          onClick={this.deletePasswordItem}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </li>
    )
  }
}
