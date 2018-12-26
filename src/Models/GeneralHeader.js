import React, { Component } from 'react'
import './styles/GeneralHeader.css'
import Login from './Login'
import Signup from './Signup'

class GeneralHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      home: this.props.active == "home" ? 'current' : '',
      contract: this.props.active == "contract" ? 'current' : '',
      wallet: this.props.active == "wallet" ? 'current' : '',
      about: this.props.active == "about" ? 'current' : '',
      logout: this.props.active == "logout" ? 'current' : ''
    }
  }
  render() {
    if (window.location.pathname === '/Signup') {
      return null;
    }
    return (
      <div className="body">
        <nav className="navbar_main">
          <div className="container">
            <div className="company_name">
              <h2>RAWLS</h2>
            </div>
            <div className="navbar_collapse">
              <ul className="nav_item_container">
                <li className="navbar_item">
                  <a className="header_button" href="#sign_in_popup">sign in</a>
                </li>
                <li className="navbar_item">
                  <a className="header_button" href="#sign_up_popup">sign up</a>
                </li>
              </ul>
            </div>
          </div>

          <div id="sign_in_popup" class="sign_in_overlay">
            <div className="signIn_popup">
              <a className="Gclose" href="/">&times;</a>
              <Login />
            </div>
          </div>

          <div id="sign_up_popup" class="sign_in_overlay">
            <div className="signIn_popup">
              <a className="Gclose" href="/">&times;</a>
              <Signup />
            </div>
          </div>

        </nav>

        <header className="Gheader_main">
          <div className="Gheader_content">
            <div className="Gheader_container">
              <h2>Share Your Data</h2>
              <h3>Earn Money Every Month</h3>
            </div>
            <div className="button_container">
              <a className="startButton" href="#sign_up_popup">
              <br></br>
              <button className="start">Get started <a>></a> </button>
              </a>
            </div>
          </div>
        </header>

      </div>
    )
  }
}

export default GeneralHeader;
