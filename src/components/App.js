import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }
  
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevProp, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  HandlerSubmitForm = ({name, number}) => {
    const newUser = { id: nanoid(5), name, number };
    const newUserNormalized = name.toLowerCase();
    const matchedName = this.state.contacts.find(contact => contact.name.toLowerCase() === newUserNormalized)
    matchedName
      ? alert(`${name} is already in contacts.`)
      : this.setState(prevState => ({contacts: [...prevState.contacts, newUser]}));
  }

  HandlerFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  }

  HandleDeleteUser = event => {
    const deleteUserId = event.currentTarget.value;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteUserId)
    }))
  }

  render() { 

    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
      
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#010101'
        }}
      >

        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.HandlerSubmitForm} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} filterChange={this.HandlerFilter} />
        <ContactList users={visibleContacts} onClick={this.HandleDeleteUser} />

      </div>

    );
  };
};

export default App;
