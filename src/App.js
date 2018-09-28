import React, { Component } from 'react';
import './App.css';
import Header from './Models/Header'
import Footer from './Models/Footer'
import Homepage from './Models/Homepage'
import NavBar from './Models/NavBar'
import Contracts from './Models/Contracts'
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="main">
            <NavBar />
            <div className="content">
              <Route exact={true} path='/' render={() => (
                <Homepage />
              )}/>
              <Route exact={true} path='/contract' render={() => (
                <div>
                  <Contracts />
                </div>
              )}/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
