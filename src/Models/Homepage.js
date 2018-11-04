import React, { Component } from 'react'
import './Homepage.css'

class Homepage extends Component {
  constructor (props) {
    super(props)
    this.state = {list: []}
    this.getContractName();
    // this.getPerms();
  }
  getContractName () {
    let CurrentContractTitle;
    if(this.props.contracts){
      this.props.contracts.map(contract => {
        const contractABI = window.web3.eth.contract(contract.abi)
        const contractInstance = contractABI.at(contract.addr)
        const { contractName } = contractInstance;
        contractName((err, name) => {
          if (err) console.error ('An error occured::::', err);
          this.state.list.push({title: name})
        });
      })
    }
  }
  render () {
    let contractItems;
    contractItems = this.state.list.map(contract => {
      return (
        <div>
        {contract.title}
        </div>
      );
    })
    return (
      <div className="row">
      <div className="leftColumn">
      <div className="card">
      <div className="title">
      <h2 className="titleText">Current Contracts</h2></div>

      <a className="Text" href="contract">See more...</a>
      </div>
      <div className="card">
      <div className="title">
      <h2 className="titleText">You can earn more...</h2></div>
      <a className="Text" href="contract" >View Contracts</a>
      </div>
      </div>

      <div className="rightColumn">

      <div className="card">
      <div className="title">
      <h2 className="titleText">My Wallet</h2></div>
      <p className="Text">balance $32</p>
      <p className="Text">Income $5</p>
      </div>

      </div>
      </div>
    )
  }
}

export default Homepage;
