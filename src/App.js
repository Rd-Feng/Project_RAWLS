import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import NavBar from './Models/NavBar'
import Contracts from './Models/Contracts'
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <NavBar />
            </div>
          )}/>
          <Route exact={true} path='/contract' render={() => (
            <div className="App">
              <NavBar />
              <Contracts />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
