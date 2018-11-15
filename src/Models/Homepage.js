import React, { Component } from 'react'
import './Homepage.css'

class Homepage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
    this.getContractName();
    this.getContractName2();
  }
  getContractName () {
    let contractABI = window.web3.eth.contract(this.props.contracts[0].abi)
    let contractInstance = contractABI.at(this.props.contracts[0].addr)
    let { contractName } = contractInstance;
    contractName((err, name) => {
      if (err) console.error ('An error occured::::', err);
      this.setState({title1: name})
    });
  }
  getContractName2 () {
    let contractABI = window.web3.eth.contract(this.props.contracts[1].abi)
    let contractInstance = contractABI.at(this.props.contracts[1].addr)
    let { contractName } = contractInstance;
    contractName((err, name) => {
      if (err) console.error ('An error occured::::', err);
      this.setState({title2: name})
    });
  }
  render () {
    return (
      <div className="row">
        <div className="leftColumn">
          <div className="card">
            <div className="title">
              <h2 className="titleText">Current Contracts</h2>
            </div>
            <p className="Text">{this.state.title1}</p>
            <p className="Text">{this.state.title2}</p>
            <a className="Text" href="contract">See more...</a>
          </div>
          <div className="card">
            <div className="title">
              <h2 className="titleText">You can earn more...</h2>
            </div>
            <p className="Text">{this.state.title1}</p>
            <a className="Text" href="contract" >View Contracts</a>
          </div>
        </div>
        <div className="rightColumn">
          <div className="card">
            <div className="title">
              <h2 className="titleText">My Wallet</h2></div>
              <p className="Text">Balance $32</p>
              <p className="Text">Monthly Income $3</p>
              <a className="Text" href="wallet">Manage My Wallet...</a>
            </div>

            <div className="card">
              <div className="title">
                <h2 className="titleText">What's Next</h2></div>

              </div>

          </div>
        </div>
      )
    }
  }

  export default Homepage;
