import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import {
  ButtonToolbar,
  ButtonGroup,
  Button, FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import fire from './fire'
import "./styles/Signup.css";

const bcrypt = require('bcryptjs')
var salt = bcrypt.genSaltSync(10);

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: '',
      password: '',
      cpassword: '',
      err_msg: ''
    };
  }

  validateForm() {
    return (
      this.state.uname.length > 0 && this.state.password.length > 0 &&
      this.state.cpassword.length > 0
    )
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  herfToSignin() {
    this.props.history.push('/#sign_in_popup')
    window.location.reload(); 
  }
  handleSubmit() {
    if (this.state.password != this.state.cpassword) {
      this.setState({ err_msg: "Passwords do not match" });
    }
    else {
      this.registerUser()
    }
  }

  registerUser() {
    var ref = fire.database().ref('Users')

    ref.child(this.inputUname.value).once('value').then(
      data => {
        if (data.val()) {
          this.setState({ err_msg: "Account already exists" });
          
        }
        else {
          var userRef = ref.child(this.inputUname.value);
          this.hashPassword()
          userRef.set({
            Username: this.inputUname.value,
            Password: this.state.password
          });
          var popup = document.getElementById("submitPopup");
          popup.classList.toggle("show");
        }
      }
    );
  }
  handleClose() {
    this.props.history.push('/')
    window.location.reload(); 
  }
  hashPassword() {
    var hash = bcrypt.hashSync(this.state.password, salt);
    this.setState({
      password: hash,
      cpassword: hash
    })
  }

  render() {
    return (
      <div className="Signup">
        <form onSubmit={this.registerUser}>
          <div className="signup_intro">
            <h3>RAWLS</h3>
            <p>Giving control and transparency on the privacy and monetary value of your data.</p>
          </div>
          <div className="signup_content">
            <ControlLabel> Register for an account </ControlLabel>
            <FormGroup controlId="uname" bsSize="large">
              <ControlLabel> Username </ControlLabel>
              <FormControl
                autoFocus
                type="text"
                value={this.state.uname}
                onChange={this.handleChange}
                inputRef={ref => { this.inputUname = ref }}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel placeholder="Password"> Password </ControlLabel>
              <FormControl
                autoFocus
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                inputRef={ref => { this.inputPassword = ref }}
              />
            </FormGroup>
            <FormGroup controlId="cpassword" bsSize="large">
              <ControlLabel> Confirm Password </ControlLabel>
              <FormControl
                autoFocus
                type="password"
                value={this.state.cpassword}
                onChange={this.handleChange}
                inputRef={ref => { this.inputcassword = ref }}
              />
            </FormGroup>
            <div className="errormsg">
              <p>{this.state.err_msg}</p>
            </div>
            <ButtonToolbar>
              <div className='submit'>
                <ButtonGroup className="buttons">
                  <div className="submit_success" id="submitPopup">
                    <div className="Congratulation">
                      <h3>Success!</h3>
                    </div>
                    <p>Welcome to RAWLS.</p>
                    <p>Your account has been successfully created. Please sign in.</p>
                    <Button className="Gclose" onClick={() => {
                      this.handleClose();
                    }}>&times;</Button>
                    <Button className="signIn_button" onClick={() => {
                      this.herfToSignin();
                    }}>Sign In<span>&raquo;</span></Button>

                  </div>
                  <Button className="submit_popup"
                    bsStyle="info"
                    disabled={!this.validateForm()}
                    onClick={() => {
                      this.handleSubmit();
                    }}
                  >
                    Submit
                        </Button>
                </ButtonGroup>
              </div>
            </ButtonToolbar>
          </div>
        </form>
      </div>
    )
  }
}
export default withRouter(Signup);
