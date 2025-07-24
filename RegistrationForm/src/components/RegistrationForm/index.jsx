import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({
      firstName: event.target.value,
      showFirstNameError: false, // Reset error on input
    })
  }

  onChangeLastName = event => {
    this.setState({
      lastName: event.target.value,
      showLastNameError: false, // Reset error on input
    })
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    this.setState({showFirstNameError: firstName.trim() === ''})
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    this.setState({showLastNameError: lastName.trim() === ''})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    const isFirstNameEmpty = firstName.trim() === ''
    const isLastNameEmpty = lastName.trim() === ''

    if (isFirstNameEmpty || isLastNameEmpty) {
      this.setState({
        showFirstNameError: isFirstNameEmpty,
        showLastNameError: isLastNameEmpty,
        isSubmitted: false,
      })
    } else {
      this.setState({
        isSubmitted: true,
        firstName: '',
        lastName: '',
        showFirstNameError: false,
        showLastNameError: false,
      })
    }
  }

  submitAnother = () => {
    this.setState({
      isSubmitted: false,
    })
  }

  renderSuccessCard = () => (
    <div className="success-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="success-msg">Submitted Successfully</p>
      <button type="button" className="submit-btn" onClick={this.submitAnother}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {
      firstName,
      lastName,
      showFirstNameError,
      showLastNameError,
      isSubmitted,
    } = this.state

    return (
      <div className="registration-form-cnt">
        <h1 className="title">Registration</h1>
        {isSubmitted ? (
          this.renderSuccessCard()
        ) : (
          <form className="registration-form" onSubmit={this.onSubmitForm}>
            <label htmlFor="firstName">FIRST NAME</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              placeholder="First name"
              onChange={this.onChangeFirstName}
              onBlur={this.onBlurFirstName}
              className={showFirstNameError ? 'error-input' : ''}
            />
            {showFirstNameError && <p className="error-msg">Required</p>}

            <label htmlFor="lastName">LAST NAME</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              placeholder="Last name"
              onChange={this.onChangeLastName}
              onBlur={this.onBlurLastName}
              className={showLastNameError ? 'error-input' : ''}
            />
            {showLastNameError && <p className="error-msg">Required</p>}

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
