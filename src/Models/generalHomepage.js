import React, { Component } from 'react'
import './styles/Homepage.css'

class GeneralHomepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    this.getContractName();
    this.getContractName2();
  }
  getContractName() {
    let contractABI = window.web3.eth.contract(this.props.contracts[0].abi)
    let contractInstance = contractABI.at(this.props.contracts[0].addr)
    let { contractName } = contractInstance;
    contractName((err, name) => {
      if (err) console.error('An error occured::::', err);
      this.setState({ title1: name })
    });
  }
  getContractName2() {
    let contractABI = window.web3.eth.contract(this.props.contracts[1].abi)
    let contractInstance = contractABI.at(this.props.contracts[1].addr)
    let { contractName } = contractInstance;
    contractName((err, name) => {
      if (err) console.error('An error occured::::', err);
      this.setState({ title2: name })
    });
  }
  render() {
    return (
        <div>
        <div>hello
      </div >
      <div>hello
      </div >
      <div>hello
      </div >

<div>hello
</div >
<div>hello
      </div >
      <div>hello
      </div >
      <div>hello
      </div >
      <div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div ><div>hello
      </div >
      </div>
    )
  }
}

export default GeneralHomepage;
