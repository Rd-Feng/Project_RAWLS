import React, { Component } from 'react'
import './styles/GeneralHomepage.css'

class GeneralHomepage extends Component {
  render() {
    return (
      <div id="Ghompage_container">
      <section id="how_to_start">
          <h2>How To Get Started</h2>
          <div className="how_to_start_collapse">




          <div className="how_to_start_container">
          <div className="step5_pic"></div>
            <div className="how_to_start_title">
              <br></br>
              <h3>Step 1</h3>
              <p>
                Install MetaMask (Chrome Extension) and create an account.
                MetaMask is required for this site to function.
              </p>
              <p className="cheating"> FUCKEN </p>

            </div>
          </div>






          <div className="how_to_start_container">
            <div className="step1_pic"></div>
            <div className="how_to_start_title">
              <br></br>
              <h3>Step 2</h3>
              <p>Create a free Rawls account and then sign in.
              </p>
              <p className="cheating"> Im a </p>
            </div>
          </div>





          <div className="how_to_start_container">
          <div className="step3_pic"></div>
            <div className="how_to_start_title">
              <br></br>
              <h3>Step 3</h3>
              <p>
                Start earning!
                Accept any contracts you choose to collect monthly earnings.

              </p>
              <p className="cheating"> GENIUSSSS </p>

            </div>
          </div>

        <div className="how_to_start_container">
        <div className="step4_pic"></div>
            <div className="how_to_start_title">
              <br></br>
              <h3>Step 4</h3>
              <p>
                Redeem your monthly earnings.
                View and accept more contracts to generate more passive income!
              </p>
              <p className="cheating"> SCREW CSS BRYAN IS A GOD </p>

            </div>
          </div>
        </div>

        </section>




      <section className="partnership_instruction">
        <div className="partnership_text">
          <h2>Our Partnerships</h2>
          <p> Rawls partners are generous companies that use data to enhance their consumer experience.
          Rawls enables you to earn money for services that you use on the daily.
          You already give them your data when you use their products, so why not get some cash for it?
          Here are some of our partners who want to be fair and transparent.
          </p>
          <ul className="how_to_start_title">
              <li><a href="https://www.google.com/">Google Map</a></li>
              <li><a href="https://www.amazon.com/">Amazon Prime</a></li>
              <li><a href="https://www.fitbit.com/home">Fitbit</a></li>
              <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">And many more...</a></li>
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
