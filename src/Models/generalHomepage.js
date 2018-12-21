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
      <section className="how_to_start">
          <h2>How to start</h2>
          <div className="how_to_start_collapse">       
          <div className="how_to_start_container">
            <div className="step1_pic"></div>
            <ul className="how_to_start_title">
              <h3>Step 1</h3>
              <li>Create an account by click on the SIGN UP button on the top right corner.</li>
            </ul>
          </div>

          <div className="how_to_start_container">
          <div className="step2_pic"></div>
            <ul className="how_to_start_title">
              <h3>Step 2</h3>
              <li>If you are using one of our partnership companies' products, please go to the privacy policy section of their website and check the box to indicate that you agree to share your data through RAWLS.</li>
            </ul>
          </div>

          <div className="how_to_start_container">
          <div className="step3_pic"></div>
            <ul className="how_to_start_title">
              <h3>Step 3</h3>
              <li>By agreening to sharing, a new contract will automatically add to your contract page. </li>
              <li>Now, you can go to your contract page to select the data/information that you want to share</li>
            </ul>
          </div>

        <div className="how_to_start_container">
        <div className="step4_pic"></div>
            <ul className="how_to_start_title">
              <h3>Step 4</h3>
              <li>
              You can redeem your cash back for any amount and at any time.
              </li>
            </ul>
          </div>
        </div>

        </section>

      
      <section className="smart_contract_info">
        <div className="smart_contract_text">
        <h2>What is smart contract?</h2>
        <p>Smart contracts help you exchange money, property, shares, or anything of value in a transparent, conflict-free way while avoiding the services of a middleman.</p>
        </div>
      </section>
 
      <section className="partnership_instruction">
        <div className="partnership_text">
          <h2>Our Partnerships</h2>
          <ul className="how_to_start_title">
              <li><a href="https://www.google.com/">Google Map</a></li>
              <li><a href="https://www.amazon.com/">Amazon Prime</a></li>
              <li><a href="https://www.fitbit.com/home">Fitbit</a></li>
            </ul>
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
