import React, { Component } from 'react';
import './App.css';
import Header from './Models/Header'
import Footer from './Models/Footer'
import Homepage from './Models/Homepage'
import NavBar from './Models/NavBar'
import Contracts from './Models/Contracts'
import Wallet from './Models/Wallet'
import About from './Models/About'
import Login from './Models/Login'
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      contracts:[
        { //Amazon Prime
          addr: '0x7d390a6fc5f2945f7f16e52a179eb8340fb868c9',
          abi: [
            {
              "constant": false,
              "inputs": [],
              "name": "updatePayment",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
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
              "constant": false,
              "inputs": [],
              "name": "pay",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "total",
              "outputs": [
                {
                  "name": "",
                  "type": "int256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "index",
                  "type": "uint256"
                },
                {
                  "name": "state",
                  "type": "bool"
                }
              ],
              "name": "changeState",
              "outputs": [],
              "payable": true,
              "stateMutability": "payable",
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
              "name": "contractName",
              "outputs": [
                {
                  "name": "",
                  "type": "string"
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
              "constant": false,
              "inputs": [],
              "name": "updateTotal",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
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
                  "type": "int256"
                },
                {
                  "name": "",
                  "type": "bool"
                },
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
              "payable": true,
              "stateMutability": "payable",
              "type": "fallback"
            }
          ]
        },
        {//Google map
          addr: '0xda0e1d522bead97e0fcec3ce085237de25a92c08',
          abi: [
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
              "constant": false,
              "inputs": [],
              "name": "pay",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "total",
              "outputs": [
                {
                  "name": "",
                  "type": "int256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "index",
                  "type": "uint256"
                },
                {
                  "name": "state",
                  "type": "bool"
                }
              ],
              "name": "changeState",
              "outputs": [],
              "payable": true,
              "stateMutability": "payable",
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
              "name": "contractName",
              "outputs": [
                {
                  "name": "",
                  "type": "string"
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
                  "type": "int256"
                },
                {
                  "name": "",
                  "type": "bool"
                },
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
              "payable": true,
              "stateMutability": "payable",
              "type": "fallback"
            }
          ]
        },
        {//Fitbit
          addr: '0x38f3793d42aaf22b87140717d2780d5cba0d7c7a',
          abi: [
            {
              "constant": false,
              "inputs": [],
              "name": "updatePayment",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
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
              "constant": false,
              "inputs": [],
              "name": "pay",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "total",
              "outputs": [
                {
                  "name": "",
                  "type": "int256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "index",
                  "type": "uint256"
                },
                {
                  "name": "state",
                  "type": "bool"
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
              "name": "contractName",
              "outputs": [
                {
                  "name": "",
                  "type": "string"
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
              "constant": false,
              "inputs": [],
              "name": "updateTotal",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
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
                  "type": "int256"
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
              "payable": true,
              "stateMutability": "payable",
              "type": "fallback"
            }
          ]
        }
      ]
    }
  }
  render() {
    console.log(this.state.username)
    return (
      <BrowserRouter>
        <div>
          <div className="main">
            <Header username=' Welcome to RAWLS'/>
            <Route exact={true} path='/' render={() => (
              <div>
                <Login />
              </div>
            )}/>
            <Route exact={true} path='/homepage' render={() => (
              <div>
                <NavBar active="home"/>
                <div className="content">
                  <Homepage contracts={this.state.contracts}/>
                </div>
              </div>
            )}/>

            <Route exact={true} path='/contract' render={() => (
              <div>
                <NavBar active="contract"/>
                <div className="content">
                  <Contracts contracts={this.state.contracts}/>
                </div>
              </div>
            )}/>

            <Route exact={true} path='/wallet' render={() => (
              <div>
                <NavBar active="wallet"/>

                <div className="content">
                  <Wallet contracts={this.state.contracts}/>
                </div>
              </div>
            )}/>

            <Route exact={true} path='/about' render={() => (
              <div>
                <NavBar active="about"/>

                <div className="content">
                  <About contracts={this.state.contracts}/>
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
