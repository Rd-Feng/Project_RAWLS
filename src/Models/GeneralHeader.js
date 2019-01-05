import React, { Component } from 'react'
import './styles/GeneralHeader.css'
import './styles/NavBar.css'
import Login from './Login'
import Signup from './Signup'
import Slides from './slideshow'

class GeneralHeader extends Component {
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

          <div id="sign_in_popup" className="sign_in_overlay">
            <div className="signIn_popup">
              <a className="Gclose" href="/#">&times;</a>
              <Login />
            </div>
          </div>

          <div id="sign_up_popup" className="sign_in_overlay">
            <div className="signIn_popup">
              <a className="Gclose" href="/#">&times;</a>
              <Signup />
            </div>
          </div>

        </nav>
        <Slides />
        <div className="button_container">
          <a className="startButton" href="#how_to_start">
            <br></br>
            <button className="start">Get started <a>></a> </button>
          </a>
        </div>
      </div>
    )
  }
}

export default GeneralHeader;