import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {

  render () {
    return (
      <div class="sidebar">
        <a class="/" href="/"><i class="fa fa-fw fa-home"></i> Home</a>
        <a href="contract"><i class="fa fa-file"></i> Contracts</a>
        <a href=""><i class="fa fa-history"></i> History</a>
        <a href=""><i class="fa fa-question"></i> About</a>
      </div>
    )
  }
}

export default NavBar;
