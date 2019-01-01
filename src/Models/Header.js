import React, { Component } from 'react'
import './styles/Header.css'
import NavBar from './NavBar'
class Header extends Component {
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
              <h2>Welcome to RAWLS</h2>
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
                <h2>Control Your Data</h2>
                <h3>nnn</h3>
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
                    <h2>We Help You</h2>
                    <h3>Share Your Data</h3>
                  </div>
                </div>
              </header>
            </div>
          )}
  }
}

export default Header;
