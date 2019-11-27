import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Contacts from './Contacts.js';

function App(props) {
  return (
    <div className="App">
      <h1>This is our first contact</h1>
      <Contacts contacts={props.contacts}/>
    </div>
  );
}

export default App;
