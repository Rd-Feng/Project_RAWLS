import React, { Component } from 'react'
import './styles/Header.css'

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {email: this.props.email}
  }
  render () {
    if(window.location.pathname==='/'){
      return null;
    }
    if(window.location.pathname==='/Signup'){
      return null;
    }
    return (

      <div className="header">

      <div className="dropdown">
      <div className="dropbtn"> Hi, {this.props.username}</div>
      <div className="dropdown-content">
      <a className="signOut left" href="/" >sign out</a>
      </div>
      </div>
      <img className="profile_pic" src={require('./images/userLogo.png')} />

      </div>

    )
  }
}

export default Header;
