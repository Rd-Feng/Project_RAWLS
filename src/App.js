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
          <Header />
          <main>
            <NavBar />
            <Route exact={true} path='/' render={() => (
              <Homepage />
            )}/>
            <Route exact={true} path='/contract' render={() => (
              <div className="App">
                <Contracts />
              </div>
            )}/>
          </main>
          <Footer />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
