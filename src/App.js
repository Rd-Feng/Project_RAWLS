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


    this.state = {
      contracts:[
        {
          addr: '0x2d28ad98624af80c635cbcbb0ba519eecee0ad8f',
          abi:  [
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
        },
        {
          addr: '0xe9eefe1b6da38614f578ebae6cc978992936dc6c',
          abi: [
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
              "constant": false,
              "inputs": [],
              "name": "pay",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
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
          ]
        }
      ]
    }
  }

  componentDidMount () {
    let count, contractABI, contractInstance
    for (count = 0; count < this.state.contracts.length - 1; count++)
    {
      const contractABI = window.web3.eth.contract(this.state.contracts[count].abi)
      const contractInstance = contractABI.at(this.state.contracts[count].addr)
      const { contractName } = contractInstance;
      contractName((err, name) => {
        if (err) console.error ('An error occured::::', err);
        console.log ('Contract name: ', name);
      });
      let i = 0;
      for (i = 0; i < 4; i++){
        let { getPerms } = contractInstance;
        getPerms(i, (err, perm) => {
          if (err) console.error ('An error occured::::', err);
          console.log('Data Name:: ', perm[0])
          console.log('Price:: ', perm[1]['c'][0])
          console.log('Shared:: ', perm[2])
        });
      }
    }
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
                  <Contracts contracts={this.state.contracts}/>
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
