import "./index.css"

const ActiveEventRegistrationDetails = ({ registrationStatus }) => {
  const statusConstants = {
    registered: "REGISTERED",
    yetToRegister: "YET_TO_REGISTER",
    registrationClosed: "REGISTRATIONS_CLOSED",
  }

  const renderNoActiveEventView = () => (
    <p className="noactive-event-text">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegisteredView = () => (
    <div className="view-cnt">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-icon"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderNotRegisteredView = () => (
    <div className="view-cnt">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="not-registered-img"
      />
      <p className="info-text">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegisterationClosedView = () => (
    <div className="view-cnt">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-closed-img"
      />
      <h1 className="registration-closed-text">
        Registrations Are Closed Now!
      </h1>
      <p className="info-text">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderEventDetails = () => {
    switch (registrationStatus) {
      case statusConstants.registered:
        return renderRegisteredView()
      case statusConstants.yetToRegister:
        return renderNotRegisteredView()
      case statusConstants.registrationClosed:
        return renderRegisterationClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return <div className="active-event-details-cnt">{renderEventDetails()}</div>
}

export default ActiveEventRegistrationDetails
