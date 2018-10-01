import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {

  render () {
    return (
      <div className="sidebar">
        <img className="profile_pic" src={require('./profile_pic.jpeg')} />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <a href="/"><i className="navByn fa fa-fw fa-home"></i><span className="faText">Home</span></a>
        <a href="contract"><i className="navByn fa fa-file"></i><span className="faText">Contracts</span></a>
        <a href=""><i className="navByn fa fa-history"></i><span className="faText">History</span></a>
        <a href=""><i className="navByn fa fa-question"></i><span className="faText">About</span></a>
      </div>
    )
  }
}

export default NavBar;
