import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome to the Dungeon!
        </p>
      </header>
    </div>
  );
}

export default App;

function getData(){
  axios({
      'method':'GET',
      'url':'https://www.dnd5eapi.co/api/',
  })
}

getData();