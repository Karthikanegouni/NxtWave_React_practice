import './index.css'

const ContactItem = props => {
  const {contactDetails,toggleFavorite} = props
  const {name, mobileNo, id, isFavorite} = contactDetails


  const addFavorite=()=>{
        toggleFavorite(id)
  }

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{mobileNo}</p>
        <button type="button" className="favorite-icon-container" onClick={addFavorite}>
          <img src={starImgUrl} className="favorite-icon" alt="star" />
        </button>
      </div>
    </li>
  )
}

export default ContactItem
