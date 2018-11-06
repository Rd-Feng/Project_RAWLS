import React, { Component } from 'react'
import './About.css'

class About extends Component {


  render () {
    return(
    <div className="aboutContainer">
      <div className="aboutCard">
        <h1> RAWLS</h1>
        <div className="aboutRawls">
         <p> Rawls is a platform empowering companies and
         consumers to monetize personal data in a way that
         fosters mutual trust and compensation, while overcoming legal
         and business barriers.</p>
        </div>
      </div>
      <div className="aboutCard">
       <h1> Mission </h1>
       <li> To enable organizations to maximize on consumer data while compensating them fairly</li>
       <li> To enable organizations to differentiate their brand based on the values of trust and integrity</li>
       <li> To give consumers control and transparency on the privacy and monetary value of their data</li>
      </div>
      <div className="aboutCard">
        <h1> Meet the Team </h1>
        <br/>
        <div className = "teamMembers">
          <div><img className="person" src={require('./team/rui.JPG')} /><p>Rui</p></div>
          <div><img className="person" src={require('./team/sumin.jpg')} /><p>Sumin</p></div> 
          <div><img className="person" src={require('./team/bryan.jpeg')} /><p>Bryan</p></div>
          <div><img className="person" src={require('./team/jian.png')} /><p>Jian</p></div>
          <div><img className="person" src={require('./team/nicole.jpg')} /><p>Nicole</p></div>
        </div>
      </div>
      <div className="contactUs">
      </div>
    </div>
)
}
}

export default About;
