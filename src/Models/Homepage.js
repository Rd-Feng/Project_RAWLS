import React, { Component } from 'react'
import './styles/Homepage.css'

class Homepage extends Component {
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
      <div id="hompage_container">
        <section className="hompage_info_collapse">
          <div className="hompage_info_container">
            <ul className="hompage_info_title">
              <h2>Current Contracts</h2>
              <li>{this.state.title1}</li>
              <li>{this.state.title2}</li>
              <li>
                <a className="hompage_info_text" href="contract">See more...</a>
              </li>
            </ul>
          </div>

          <div className="hompage_info_container">
            <ul className="hompage_info_title">
              <h2>My wallet</h2>
              <li>Balance $32</li>
              <li>Monthly Income $3</li>
              <li>
                <a className="hompage_info_text" href="wallet">Manage My Wallet...</a>
              </li>
            </ul>
          </div>

          <div className="hompage_info_container">
            <ul className="hompage_info_title">
              <h2>Partnerships</h2>
              <li>
                <a className="hompage_info_text" href="https://www.projectrawls.com/" target="_blank">Project RAWLS Partnerships</a>
              </li>
            </ul>
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

export default Homepage;
