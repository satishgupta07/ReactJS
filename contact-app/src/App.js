import React, { useState } from 'react'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import Header from './components/Header'

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact])
  }

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App

