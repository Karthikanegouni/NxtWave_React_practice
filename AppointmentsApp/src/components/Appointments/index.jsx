import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import {Component} from 'react'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    titleInput: '',
    dateInput: '',
    displayStarredItems: false,
  }

  updateTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  updateDateInput = event => {
    this.setState({dateInput: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    if (titleInput.trim() === '' || dateInput.trim() === '') {
      return
    }
    const dateObj = new Date(dateInput)
    const formatedDate = format(dateObj, 'dd MMMM yyyy, EEEE')
    const newAppointmentItem = {
      id: uuidv4(),
      title: titleInput,
      date: formatedDate,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointmentItem],
      titleInput: '',
      dateInput: '',
    }))
  }

  displayStarred = () => {
    this.setState(prevState => ({
      displayStarredItems: !prevState.displayStarredItems,
    }))
  }

  updateStarredStatus = id => {
    this.setState(prevState => {
      const {appointmentsList} = prevState
      const updatedList = appointmentsList.map(appointmentItem => {
        if (appointmentItem.id === id) {
          return {...appointmentItem, isStarred: !appointmentItem.isStarred}
        }
        return appointmentItem
      })

      return {
        appointmentsList: updatedList,
      }
    })
  }

  render() {
    const {appointmentsList, titleInput, dateInput, displayStarredItems} =
      this.state
    const filteredList = displayStarredItems
      ? appointmentsList.filter(item => item.isStarred === true)
      : appointmentsList
    const activeBtnClass = displayStarredItems && 'active-starred-btn'
    return (
      <div className="wrapper">
        <div className="appointment-card">
          <div className="top-cnt">
            <div className="left-cnt">
              <h1 className="title">Add Appointments</h1>
              <form
                action="submit"
                className="form-cnt"
                onSubmit={this.submitForm}
              >
                <label htmlFor="title" className="title-label">
                  TITLE
                </label>
                <input
                  onChange={this.updateTitleInput}
                  type="text"
                  id="title"
                  className="title-input"
                  placeholder="Title"
                  value={titleInput}
                  required
                />
                <label htmlFor="date" className="date-label">
                  DATE
                </label>
                <input
                  type="date"
                  id="date"
                  value={dateInput}
                  onChange={this.updateDateInput}
                  className="date-input"
                  required
                />

                <button type="submit" className="add-btn">
                  Add
                </button>
              </form>
            </div>
            <div className="right-cnt">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="hero-img"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="bottom-appointments-title-cnt">
            <h1 role="heading" name="Appointments" className="appointments-cnt-title">Appointments</h1>
            <button
              className={`starred-btn ${activeBtnClass}`}
              onClick={this.displayStarred}
            >
              Starred
            </button>
          </div>
          <ul className="appointment-list-cnt">
            {filteredList.map(appointment => (
              <AppointmentItem
                key={appointment.id}
                appointmentDetails={appointment}
                updateStarredStatus={this.updateStarredStatus}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
