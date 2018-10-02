import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      home: this.props.active == "home" ? 'current' : '',
      contract: this.props.active == "contract" ? 'current' : '',
      history: this.props.active == "history" ? 'current' : '',
      about: this.props.active == "about" ? 'current' : ''
    }
  }
  render () {
    return (
      <div className="sidebar">
        <img className="profile_pic" src={require('./profile_pic.jpeg')} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <a className={this.state.home} href="/">
        <i className="fa fa-fw fa-home"></i> Home
      </a>
      <a className={this.state.contract} href="contract">
        <i className="fa fa-file"></i> Contracts
      </a>
      <a className={this.state.history} href="">
        <i className="fa fa-history"></i> History
      </a>
      <a className={this.state.about} href="">
        <i className="fa fa-question"></i> About
      </a>
    </div>
  )
}
}

export default NavBar;
