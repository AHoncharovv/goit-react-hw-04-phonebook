import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

function App() {
  const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])

  const handlerSubmitForm = (name, number) => {
    const newUser = { id: nanoid(5), name, number };
    const newUserNormalized = name.toLowerCase();
    const matchedName = contacts.find(contact => contact.name.toLowerCase() === newUserNormalized);

    matchedName
      ? alert(`${name} is already in contacts.`)
      : setContacts([...contacts, newUser]);
  }

  const handlerFilter = event => {
    setFilter( event.currentTarget.value );
  }

  const handleDeleteUser = event => {
    const deleteUserId = event.currentTarget.value;
    setContacts(contacts.filter(contact => contact.id !== deleteUserId))
  }
  
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
   
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
      <ContactForm onSubmit={handlerSubmitForm} />
      <h2>Contacts</h2>
      <Filter value={filter} filterChange={handlerFilter} />
      <ContactList users={visibleContacts} onClick={handleDeleteUser} />

    </div>
  ); 
};

export default App;