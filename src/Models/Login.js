import React, { Component } from "react";
import { Route, withRouter } from 'react-router-dom';
import {
  ButtonToolbar,
  ButtonGroup,
  Button, FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import fire from './fire'
import "./styles/Login.css";

const UsernameContext = React.createContext();

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      email: '',
      password: '',
      correctuname: '',
      correctpasswd: ''
    };

  }

  queryDatabase(uname) {
    var db = fire.database();
    var ref = db.ref('Users');

    db.ref('Users').child(uname).once('value').then(
      data => {
        this.setState({
          correctpasswd: data.val().Password,
          correctuname: this.state.email
        }, () => {
          this.handleSubmit();
        })
      }
    ).catch(err => { });
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
  handleSubmit() {
    if (this.state.email == this.state.correctuname && this.state.password == this.state.correctpasswd) {
      this.props.history.push('/homepage')
    }
    else {
      alert("Please enter valid credentials or register for an account");
    }
  }

  handleRegister() {
    this.props.history.push('/Signup')
  }


  render() {
    return (
      <div className="Login">
        <form onSubmit={this.registerUser}>
        <img className="logo_login" src={require('./images/logo5.png')} />
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel> Username </ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              inputRef={ref => { this.inputEmail = ref }}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel> Password </ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              inputRef={ref => { this.inputPassword = ref }}
            />
          </FormGroup>
          <div>
            <ButtonToolbar >
              <div className='buttonDIV'>
                <ButtonGroup className="touchCSSJian">
                  <Button
                    bsStyle="info"
                    disabled={!this.validateForm()}
                    onClick={() => {
                      this.queryDatabase(this.state.email);
                    }}
                  >
                    Login
                    </Button>
                </ButtonGroup>

                <ButtonGroup className="touchCSSJian">
                  <Button
                    type="submit"
                    onClick={() => {
                      this.handleRegister();
                    }}
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
