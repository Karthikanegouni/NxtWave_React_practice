import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, updateStarredStatus} = props
  const {id, title, date, isStarred} = appointmentDetails
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onStarUpdate = () => {
    updateStarredStatus(id)
  }

  return (
    <li className="appointment-item-cnt">
      <div className="text-cnt">
        <p className="appointment-title">{title}</p>
        <p className="appointment-date">{date}</p>
      </div>
      <button className="star-btn" data-testid="star" onClick={onStarUpdate}>
        <img src={starImgUrl} alt="star" className="star-icon" />
      </button>
    </li>
  )
}

export default AppointmentItem
