import React, { Component } from 'react'
import './styles/GeneralHomepage.css'

class GeneralHomepage extends Component {
  render() {
    return (
      <div id="Ghompage_container">
      <section id="how_to_start">
          <h2>How to start</h2>
          <div className="how_to_start_collapse">
          <div className="how_to_start_container">
            <div className="step1_pic"></div>
            <div className="how_to_start_title">
              <br></br>
              <h3>Step 1</h3>
              <p>Sign up for a free account</p>
            </div>
          </div>

          <div className="how_to_start_container">
          <div className="step3_pic"></div>
            <div className="how_to_start_title">
              <br></br>
              <h3>Step 2</h3>
              <p>
                Monetize your data by creating hassle-free smart contracts with
                companies of your choice
              </p>
            </div>
          </div>

        <div className="how_to_start_container">
        <div className="step4_pic"></div>
            <div className="how_to_start_title">
              <br></br>
              <h3>Step 3</h3>
              <p>
                Redeem your earnings to your Ethereum wallet
              </p>
            </div>
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
          <img className="partnership_pic" alt="partnership" src={require('./images/partnership_logo.png')} />
        </div>
      </section>
    </div >
    )
  }
}

export default GeneralHomepage;