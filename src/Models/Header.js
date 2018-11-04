import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {email: this.props.email}
  }
  render () {
    if(window.location.pathname==='/'){
      return null;
    }
    return (

      <div className="header">

      <div class="dropdown">
      <div className="dropbtn"> Hi, Username</div>
      <div class="dropdown-content">
      <a className="signOut left" href="/" >sign out</a>
      </div>
      </div>
      <img className="profile_pic" src={require('./userLogo.png')} />

      </div>

    )
  }
}

export default Header;
