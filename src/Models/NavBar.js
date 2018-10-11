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
        <img className="logo_pic" src={require('./logo1.png')} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <a className={this.state.home} href="/"><div className="faContainer">
        <i className="fa fa-fw fa-home faPic"></i> <div className="faText">Home</div>
      </div></a>
      <a className={this.state.contract} href="contract"><div className="faContainer">
        <i className="fa fa-file faPic"></i> <div className="faText">Contracts</div>
      </div></a>
      <a className={this.state.history} href=""><div className="faContainer">
        <i className="fa fa-history faPic"></i> <div className="faText">History</div>
      </div></a>
      <a className={this.state.about} href=""><div className="faContainer">
        <i className="fa fa-question faPic"></i> <div className="faText">About</div>
      </div></a>
    </div>
  )
}
}

export default NavBar;
