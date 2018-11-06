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
      this.setState({title: name})
    });
    // if(this.props.contracts){
    //   this.props.contracts.map(contract => {
    //     const contractABI = window.web3.eth.contract(contract.abi)
    //     const contractInstance = contractABI.at(contract.addr)
    //     const { contractName } = contractInstance;
    //     contractName((err, name) => {
    //       if (err) console.error ('An error occured::::', err);
    //       this.state.items.push(
    //         {
    //           title: name
    //         }
    //       )
    //     });
    //   })
    // }
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
    // let contractItems;
    // console.log(this.state.list)
    // contractItems = this.state.list.map(contract => {
    //   return (
    //     <div key={contract.title}>
    //     {contract.title}
    //     </div>
    //   );
    // })
    return (
      <div className="row">
      <div className="leftColumn">
      <div className="card">
      <div className="title">
      <h2 className="titleText">Current Contracts</h2></div>
      <p>{this.state.title}</p>
      <p>{this.state.title2}</p>
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
      <p className="Text">Balance $32</p>
      <p className="Text">Monthly Income $5</p>
      </div>

      </div>
      </div>
    )
  }
}

export default Homepage;
