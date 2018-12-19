import React, { Component } from 'react'
import './styles/GeneralHomepage.css'

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
      <div id="Ghompage_container">
      <section className="smart_contract_info">
        <div className="smart_contract_text">
        <h2>What is smart contract?</h2>
        <p>Smart contracts help you exchange money, property, shares, or anything of value in a transparent, conflict-free way while avoiding the services of a middleman.</p>
        </div>
      </section>
      <section className="contract_instruction">
        <div className="contract_instruct_pic_container">
          <img className="contract_instruct_pic" src={require('./images/socialShareImage.img.png')} />
        </div>
        <div className="contract_instruct_text">
          <h2>How to change permission?</h2>
          <p>You can go to your Contracts Page. Then, click on the contract that you want to change........ </p>
        </div>
      </section>
      <section className="partnership_instruction">
        <div className="partnership_text">
          <h2>How to earn more?</h2>
          <p>Go to visit our <a href="#hompage_container">Partnerships</a> ' Homepage to explore more useful products. Once you become a customer of our Partnerships, a new contract will automatically add to your contract page. Then, you can start sharing your permission by turning on the toggle button </p>
        </div>
        <div className="partnership_pic_container">
          <img className="partnership_pic" src={require('./images/partnership_logo.png')} />
        </div>
      </section>
    </div >
    )
  }
}

export default GeneralHomepage;
