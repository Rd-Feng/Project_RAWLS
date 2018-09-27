import React, { Component } from 'react';
  import './App.css';
  import NavBar from './Models/NavBar'
  import Contracts from './Models/Contracts'
  import {BrowserRouter, Route} from 'react-router-dom';

  class App extends Component {
    render() {
      return (
          <BrowserRouter>
          <div>
            <NavBar />
            <div className="mainInterface">
            <main>
              <Route exact={true} path='/' render={() => (
                <h1>Home page content place holder</h1>
              )}/>
              <Route exact={true} path='/contract' render={() => (
                <div className="App">
                  <Contracts />
                </div>
              )}/>
            </main>
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }

export default App;
