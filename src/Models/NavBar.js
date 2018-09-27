import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {

  render () {
    return (
      <div className="sidebar">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="bynIcons">
        <a href="/"><i className="fa fa-fw fa-home"></i> <span className="textByn">Home</span></a>
        <a href="contract"><i className="fa fa-file"></i> <span className="textByn">Contracts</span></a>
        <a href=""><i className="fa fa-history"></i> <span className="textByn">History</span></a>
        <a href=""><i className="fa fa-question"></i> <span className="textByn">About</span></a>
      </div>
      </div>
    )
  }
}

export default NavBar;
