import React, { Component } from 'react'
import './styles/About.css'

class About extends Component {


  render () {
    return(
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
        <img src={require('./team/rawls1.png')} className="flexLogo"/>
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
        <p>A team of 5 Holberton students created this as a side project
        and they are seeking more challenges in the future.</p>
      </section>


      <section className="sumin">
        <img src={require('./team/sumin.jpg')} className="photo"/>
        <p className="infoText">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
      </section>

      <section className="rui">
        <img src={require('./team/rui.JPG')} className="photo"/>
        <p className="infoText">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
      </section>

      <section className="bryan">
        <img src={require('./team/bryan.jpeg')} className="photo"/>
        <p className="infoText">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
      </section>

      <section className="jian">
        <img src={require('./team/jian.png')} className="photo"/>
        <p className="infoText">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
      </section>

      <section className="nicole">
        <img src={require('./team/nicole.jpg')} className="photo"/>
        <p className="infoText">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
      </section>


    </div>
    )
  }
}

export default About;
