import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Createresume from './Components/Createresume';
import React, { Component } from 'react'
import {BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Resume from './Components/Resume';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      

      <Router>
        <Routes>
          {/* <Route
           path='/'
           element={<Header/>}
          >
          </Route> */}
          <Route
           path='/'
           element={<Body/>}
          >
          </Route>
          <Route
           path='/createresume'
           element={<Createresume/>}
          >
          </Route>
          <Route
           path='/resume'
           element={<Resume/>}
          >
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
