import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactItem from "./components/ContactItem";

import "./App.css";

const initialContactsList = [
  {
    id: uuidv4(),
    name: "Ram",
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: "Pavan",
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: "Nikhil",
    mobileNo: 9999955555,
    isFavorite: false,
  },
];

class App extends Component {
  state = {
    contactsList: initialContactsList,
    name: "",
    mobileNo: "",
  };

  onAddContact = (event) => {
    event.preventDefault();
    const { name, mobileNo } = this.state;
    const newContact = {
      id: uuidv4(),
      name: name.charAt(0).toUpperCase() + name.slice(1),
      mobileNo: mobileNo,
      isFavorite: false,
    };
    this.setState((prev) => ({
      contactsList: [...prev.contactsList, newContact],
      name: "",
      mobileNo: "",
    }));
  };

  onChangeMobileNo = (event) => {
    this.setState({ mobileNo: event.target.value });
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  toggleFavorite = (id) => {
    const { contactsList } = this.state;
    this.setState({
      contactsList: contactsList.map((contact) => {
        if (id === contact.id) {
          return { ...contact, isFavorite: !contact.isFavorite };
        }
        return contact;
      }),
    });
  };

  render() {
    const { name, mobileNo, contactsList } = this.state;
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Contacts</h1>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
            <input
              value={name}
              type="text"
              onChange={this.onChangeName}
              className="input"
              placeholder="Name"
              required
            />
            <input
              type="tel"
              pattern="[0-9]{10}"
              maxLength="10"
              className="input"
              value={mobileNo}
              onChange={this.onChangeMobileNo}
              placeholder="Mobile Number"
              required
            />

            <button type="submit" className="button">
              Add Contact
            </button>
          </form>
          <ul className="contacts-table">
            <li className="table-header">
              <p className="table-header-cell name-column">Name</p>
              <hr className="separator" />
              <p className="table-header-cell">Mobile Number</p>
            </li>
            {contactsList.map((eachContact) => (
              <ContactItem
                key={eachContact.id}
                contactDetails={eachContact}
                toggleFavorite={this.toggleFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
