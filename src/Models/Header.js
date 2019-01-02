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
                <h1>Current Contracts</h1>
              </div>
            </div>
            <div class="circle1 circle"></div>
            <div class="circle2 circle"></div>
            <div class="circle3 circle"></div>
            <div class="circle4 circle"></div>
            <div class="circle5 circle"></div>
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
                    <h1>ABOUT US</h1>
                  </div>
                </div>
                <div class="triangle1 triangle"></div>
                <div class="triangle2 triangle"></div>
                <div class="triangle3 triangle"></div>
                <div class="triangle4 triangle"></div>
                <div class="triangle5 triangle"></div>
                <div class="triangle6 triangle"></div>
                <div class="triangle7 triangle"></div>
              </header>
            </div>
          )}
  }
}

export default Header;
