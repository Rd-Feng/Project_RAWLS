import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {

  render () {
    return (
      <div className="sidebar">
        <img className="profile_pic" src={require('./profile_pic.jpeg')} />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <a href="/"><i className="fa fa-fw fa-home"></i> Home</a>
        <a href="contract"><i className="fa fa-file"></i> Contracts</a>
        <a href=""><i className="fa fa-history"></i> History</a>
        <a href=""><i className="fa fa-question"></i> About</a>
      </div>
    )
  }
}

export default NavBar;
