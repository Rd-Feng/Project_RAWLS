import React, { Component } from 'react'
import './styles/Header.css'
import NavBar from './NavBar'
class Header extends Component {
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
    if (window.location.pathname === '/') {
      return null;
    }
    if (window.location.pathname === '/Signup') {
      return null;
    }
    if (window.location.pathname === '/homepage') {
    return (
      <div className="body">
      <NavBar/>
        <header className="header_home">
          <div className="header_content">
            <div className="header_container">
              <h2>Share Your Data</h2>
              <h3>To Earn Money Every Month</h3>
            </div>
          </div>
        </header>
      </div>
    )}
    if (window.location.pathname === '/contract') {
      return (
        <div className="body">
        <NavBar/>
          <header className="header_contract">
            <div className="header_content">
              <div className="header_container">
                <h2>Share Your Data</h2>
                <h3>To Earn Money Every Month</h3>
              </div>
            </div>
          </header>
        </div>
      )}
      if (window.location.pathname === '/wallet') {
        return (
          <div className="body">
          <NavBar/>
          </div>
        )}
        if (window.location.pathname === '/about') {
          return (
            <div className="body">
            <NavBar/>
              <header className="header_about">
                <div className="header_content">
                  <div className="header_container">
                    <h2>Share Your Data</h2>
                    <h3>To Earn Money Every Month</h3>
                  </div>
                </div>
              </header>
            </div>
          )}
  }
}

export default Header;
