import React, { Component } from 'react'
import './styles/Header.css'

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
    return (
      <div className="body">
        <nav className="navbar_main">
          <div className="container">
            <div className="company_name">
              <h2>RAWLS</h2>
            </div>
            <div className="navbar_collapse">
              <ul className="nav_item_container">
                <li className="Home">
                  <a className={this.state.home} href="homepage">Home</a>
                </li>
                <li className="navbar_item">
                  <a className={this.state.contract} href="contract">Contracts</a>
                </li>
                <li className="navbar_item">
                  <a className={this.state.wallet} href="wallet">Wallet</a>
                </li>
                <li className="navbar_item">
                  <a className={this.state.about} href="about">About</a>
                </li>
                <li className="navbar_item">
                  <a className={this.state.logout} href="/">sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="header_main">
          <div className="header_content">
            <div className="header_container">
              <h2>Share Your Data</h2>
              <h3>To Earn Money Every Month</h3>
            </div>
          </div>
        </header>

      </div>
    )
  }
}

export default Header;
