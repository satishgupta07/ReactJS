import React, { useState, useEffect } from 'react'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import Header from './components/Header'

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact])
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])
  
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App

