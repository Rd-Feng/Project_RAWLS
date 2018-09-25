import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import newPage view
import NewPage from './newPage';
import {BrowserRouter, Route} from 'react-router-dom';

class ShowContracts extends Component {
  constructor (props) {
    super (props);

    const MyContract = window.web3.eth.contract ([
	{
		"constant": false,
		"inputs": [],
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
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getData",
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
		"name": "getState",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);

    this.state = {
      ContractInstance: MyContract.at('0x22680d69518024a32e3e80f0b5db096ff45964b9')
    }

    this.queryData = this.queryData.bind(this);
    this.queryState = this.queryState.bind(this);
    this.changeState = this.changeState.bind(this);
  }
  queryData () {
    const { getData } = this.state.ContractInstance;
    getData((err, data) => {
      if (err) console.error ('An error occured::::', err);
      console.log ('This is our contract\'s data::::', data);
    });
  }
  queryState () {
    const {getState } = this.state.ContractInstance;
    getState((err, state) => {
      if (err) console.error ('An error occured::::', err);
      console.log ('Current state::::', state);
    });
  }
  changeState (){
    const {changeState} = this.state.ContractInstance;
    changeState((err, state) => {
      if (err) console.error ('Error in change state::::', err);
      console.log('Attemp to change state');
    })
  }
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
            <h1 className="App-title"> React & Ethereum Sample App </h1>
          </header>
          <br />
          <br />
          <button onClick={ this.queryData }>Query smart contract data</button>
          <br />
          <button onClick={ this.queryState}>Query the contract state</button>
          <br />
          <br />
          <button onClick={ this.changeState}>Change the contract state</button>
          <br />
          <br />
          <a href="newPage" target="_blank">go to new page</a>
      </div>
    );
  }
}

export default ShowContracts;
