import React, { Component } from 'react';
import './App.css';
import Header from './Models/Header'
import Footer from './Models/Footer'
import Homepage from './Models/Homepage'
import Contracts from './Models/Contracts'
import Wallet from './Models/Wallet'
import About from './Models/About'
import GeneralHeader from './Models/GeneralHeader'
import GeneralHomepage from './Models/generalHomepage'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ethAccount: '0xce8458cb49f4fa890bd22f936eafcca66d81ac2e',
            contracts: [
                { //Amazon Prime
                    addr: '0x55b7740dab4ac4e123cc70a7368cae7861e4c2d1',
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
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "ids",
                                    "type": "uint256[]"
                                },
                                {
                                    "name": "count",
                                    "type": "uint256"
                                }
                            ],
                            "name": "changeState",
                            "outputs": [],
                            "payable": true,
                            "stateMutability": "payable",
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
                    addr: '0x9f0cbbe8ef624c238263d11c8e8e1d8f7d589972',
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
                            "inputs": [
                                {
                                    "name": "ids",
                                    "type": "uint256[]"
                                },
                                {
                                    "name": "count",
                                    "type": "uint256"
                                }
                            ],
                            "name": "changeState",
                            "outputs": [],
                            "payable": true,
                            "stateMutability": "payable",
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
                    addr: '0x1575fb953073426f9ea58e51a5d059f808e6d9a7',
                    abi: [
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "ids",
                                    "type": "uint256[]"
                                },
                                {
                                    "name": "count",
                                    "type": "uint256"
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
                            "inputs": [],
                            "name": "updatePayment",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
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
                        }
                    ]
                }
            ]
        }
    }
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Route exact={true} path='/' render={() => (
                        <div>
                            <GeneralHeader active="/" contracts={this.state.contracts} />
                            <div className="content">
                                <GeneralHomepage contracts={this.state.contracts} />
                            </div>
                            <Footer />
                        </div>
                    )} />
                    <Route exact={true} path='/homepage' render={() => (
                        <div>
                            <Header active="home" />
                            <div className="content">
                                <Homepage contracts={this.state.contracts} />
                            </div>
                            <Footer />
                        </div>
                    )} />
                    <Route exact={true} path='/contract' render={() => (
                        <div>
                            <Header active="contract" />
                            <div className="content">
                                <Contracts contracts={this.state.contracts} account={this.state.ethAccount} />
                            </div>
                            <Footer />
                        </div>
                    )} />
                    <Route exact={true} path='/wallet' render={() => (
                        <div>
                            <Header active="wallet" />
                            <div className="content">
                                <Wallet contracts={this.state.contracts} />
                            </div>
                            <Footer />
                        </div>
                    )} />
                    <Route exact={true} path='/about' render={() => (
                        <div>
                            <Header active="about" />
                            <div className="content">
                                <About contracts={this.state.contracts} />
                            </div>
                            <Footer />
                        </div>
                    )} />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
