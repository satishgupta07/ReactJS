import React from 'react'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import Header from './components/Header'

function App() {
  const contacts = [
    {
      id: "1",
      name: "Satish",
      email: "satish@gmail.com"
    },
    {
      id: "2",
      name: "Dipesh",
      email: "malvia@gmail.com"
    }
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App

