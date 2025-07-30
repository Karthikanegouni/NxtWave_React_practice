import "./index.css"

const EventItem = ({ event, setActiveEvent, activeEventId }) => {
  const { id, imageUrl, name, location } = event

  const onEventClick = () => {
    setActiveEvent(id)
  }
  const activeClass = id === activeEventId ? "active-event" : ""
  return (
    <li className="event-item-cnt">
      <button type="button" className="event-item-btn" onClick={onEventClick}>
        <img
          src={imageUrl}
          alt="event"
          className={`event-item-img ${activeClass}`}
        />
      </button>

      <p className="event-item-title">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
