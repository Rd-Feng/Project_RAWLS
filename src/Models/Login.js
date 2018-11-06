import React, { Component } from "react";
import {
  ButtonToolbar,
  ButtonGroup,
  Button, FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import "./Login.css";
import Header from './Header';
import Homepage from './Homepage';
import NavBar from './NavBar';
import {BrowserRouter, Route} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      correctuname: 'asdf@asdf.com',
      correctpasswd: '098&poiU'
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  componentWillMount() {
   document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
   document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(event) {
    if (event.keyCode != 13) return;
    this.handleSubmit();
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit () {
    if (this.state.email == this.state.correctuname && this.state.password == this.state.correctpasswd)
    {
      window.location = "homepage"
    }
    else {
      alert('Incorrect user name and password pair!!!')
    }
  }
  render() {
    return (
      <div className="Login">
        <form onSubmit={this.checkSignIn}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel> Username </ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              inputRef = {ref => { this.inputEmail = ref}}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel> Password </ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              inputRef = {ref => { this.inputPassword = ref}}
            />
          </FormGroup>
          <div>
            <ButtonToolbar >
              <div className='buttonDIV'>
                <ButtonGroup className="touchCSSJian">

                  <Button
                    bsStyle="info"
                    disabled={!this.validateForm()}
                    onClick={() => {this.handleSubmit();}}
                    >
                      Login
                    </Button>
                  </ButtonGroup>

                  <ButtonGroup className="touchCSSJian">
                    <Button
                      type="submit"
                      >
                        Register
                      </Button>

                    </ButtonGroup>
                  </div>
                </ButtonToolbar>
              </div>
            </form>
          </div>
        );
      }
    }

    export default Login;
