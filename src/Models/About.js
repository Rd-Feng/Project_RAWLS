import React, { Component } from 'react'
import './styles/About.css'

class About extends Component {
  render() {
    return (
      <div className="aboutContainer">

        <section className="aboutLogo">

          <div className="about">
            <div className="aboutTitle">
              <h1>What is Project Rawls?</h1>
            </div>

            <div className="aboutText">
              <p>Rawls is a platform empowering companies and
           consumers to monetize personal data in a way that
           fosters mutual trust and compensation, while overcoming legal
           and business barriers.</p>

            </div>
          </div>

          <div className="logo">
            <img src={require('./team/rawls1.png')} alt="rawl logo" className="flexLogo" />
          </div>

        </section>


        <section>
          <div className="mission">
            <h1 className="missionTitle">The Mission</h1>
            <ul>
              <li>To enable organizations to maximize on consumer data while compensating them reasonably</li>
              <li>To give companies the opportunity to differentiate their brand based on the values of trust and integrity</li>
              <li>To give consumers control and transparency on the privacy and monetary value of their data</li>
            </ul>
          </div>

        </section>


        <section className="meet">
          <h1 className="meetTitle">MEET THE TEAM</h1>
          <p>A team of 5 Holberton students created this to tackle new concepts.
          <br/>They are seeking more challenges in the future to learn about tech.
          <br/>Follow or DM any of us!</p>

          <div className="photosContainer">
            <div className="photos">
              <img src={require('./team/sumin.jpg')} className="photo sumin" alt="Sumin" />
              <div className="name_container">
                <a href="https://twitter.com/3_sumin" target="_blank" rel="noopener noreferrer">
                  <img src={require('./images/twitter.png')} className="twitter" alt="Sumin" />
                </a>
                <span className="nameText">Sumin Yu</span>
              </div>
            </div>

            <div className="photos">
              <img src={require('./team/rui.JPG')} className="photo rui" alt="Rui" />
              <div className="name_container">
                <a href="https://twitter.com/FengRui94" target="_blank" rel="noopener noreferrer">
                  <img src={require('./images/twitter.png')} className="twitter" alt="Rui" />
                </a>
                <span className="nameText">Rui Feng</span>
              </div>
            </div>

            <div className="photos">
              <img src={require('./team/bryan.jpeg')} className="photo bryan" alt="Bryan" />
              <div className="name_container">
                <a href="https://twitter.com/BynLeung" target="_blank" rel="noopener noreferrer">
                  <img src={require('./images/twitter.png')} className="twitter" alt="Bryan" />
                </a>
                <span className="nameText">Bryan Leung</span>
              </div>
            </div>

            <div className="photos">
              <img src={require('./team/jian.png')} className="photo jian" alt="Jian" />
              <div className="name_container">
                <a href="https://twitter.com/GeonAitch" target="_blank" rel="noopener noreferrer">
                  <img src={require('./images/twitter.png')} className="twitter" alt="Jian" />
                </a>
                <span className="nameText">Jian Huang</span>
              </div>
            </div>

            <div className="photos">
              <img src={require('./team/nicole.jpg')} className="photo nicole" alt="Nicole" />
              <div className="name_container">
                <a href="https://twitter.com/Nicolette_Swan" target="_blank" rel="noopener noreferrer">
                  <img src={require('./images/twitter.png')} className="twitter" alt="twitter" />
                </a>
                <span className="nameText">Nicole Swanson</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default About;
