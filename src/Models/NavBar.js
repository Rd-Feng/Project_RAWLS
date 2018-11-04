import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      home: this.props.active == "home" ? 'current' : '',
      contract: this.props.active == "contract" ? 'current' : '',
      wallet: this.props.active == "wallet" ? 'current' : '',
      about: this.props.active == "about" ? 'current' : '',
      logout: this.props.active == "logout" ? 'current' : ''
    }
  }
  render () {
    return (
      <div className="sidebar">
        <img className="logo_pic" src={require('./logo5.png')} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <a className={this.state.home} href="homepage">
        <div className="faContainer">
          <i className="fa fa-fw fa-home faPic"></i>
          <div className="faText">Home</div>
        </div>
      </a>
      <a className={this.state.contract} href="contract">
        <div className="faContainer">
          <i className="fa fa-fw fa-file faPic"></i>
          <div className="faText">Contracts</div>
        </div>
      </a>
      <a className={this.state.wallet} href="wallet">
        <div className="faContainer">
          <i className="fa fa-fw fa-money faPic"></i>
          <div className="faText">Wallet</div>
        </div>
      </a>
      <a className={this.state.about} href="about">
        <div className="faContainer">
          <i className="fa fa-fw fa-question faPic"></i>
          <div className="faText">About</div>
        </div>
      </a>

    </div>
  )
}
}

export default NavBar;
