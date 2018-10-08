import React, { Component } from 'react'
import './Header.css'

class Header extends Component {

  render () {
    return (
      <div className="header">
      <img className="profile_pic" src={require('./userLogo.png')} />
      </div>

    )
  }
}

export default Header;
