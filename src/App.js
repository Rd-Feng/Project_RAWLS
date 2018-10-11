import React, { Component } from 'react';
import './App.css';
import Header from './Models/Header'
import Footer from './Models/Footer'
import Homepage from './Models/Homepage'
import NavBar from './Models/NavBar'
import Contracts from './Models/Contracts'
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {

  constructor (props) {
    super(props)

    const AmazonContract = window.web3.eth.contract([
      {
        "constant": false,
        "inputs": [
          {
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "changeState",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "kill",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "pay",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "inputs": [
          {
            "name": "u",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getCompany",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "getPerms",
        "outputs": [
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getUser",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "numPerms",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "payment",
        "outputs": [
          {
            "name": "",
            "type": "int256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ])

    this.state = {
      AmazonContractInstance: AmazonContract.at('0x7e59ed59859f94670ff7cd805c5bc1ace1e29ef4')
    }
    // This query contract. We should have a loop to get all perms in the contract
    this.queryPerms(3);

  }

  queryPerms(index) {
    const {getPerms} = this.state.AmazonContractInstance;
    getPerms(index, (err, perm) => {
      if (err) console.error ('An error occured::::', err);
      this.setState({content: perm})
    });

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="main">
            <Header />
            <Route exact={true} path='/' render={() => (
              <div>
                <NavBar active="home"/>

                <div className="content">
                  <Homepage />
                </div>
              </div>
            )}/>
            <Route exact={true} path='/contract' render={() => (
              <div>
                <NavBar active="contract"/>
                <div className="content">
                  <Contracts />
                </div>
              </div>
            )}/>
            <Route exact={true} path='/wallet' render={() => (
              <div>
                <NavBar active="wallet"/>

                <div className="content">
                  <h2>Wallet</h2>
                </div>
              </div>
            )}/>
            <Route exact={true} path='/about' render={() => (
              <div>
                <NavBar active="about"/>

                <div className="content">
                  <h2>About</h2>
                </div>
              </div>
            )}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
