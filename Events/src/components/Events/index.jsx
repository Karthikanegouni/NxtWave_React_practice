import { Component } from "react"
import EventItem from "../EventItem"
import ActiveEventRegistrationDetails from "../ActiveEventRegistrationDetails"
import "./index.css"

class Events extends Component {
  render() {
    return (
      <div>
        <h1>Events</h1>
        <EventItem />
        <ActiveEventRegistrationDetails />
      </div>
    )
  }
}

export default Events
