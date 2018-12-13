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

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            password: '',
            cpassword: ''
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
    handleSubmit () {
        if (this.state.password != this.state.cpassword)
        {
            alert("Your passwords do not match.")
        }
        else
        {
            this.registerUser()
        }
    }

    registerUser() {
        var userRef = fire.database().ref('Users').child(this.inputUname.value);
        userRef.set({
            Username: this.inputUname.value,
            Password: this.inputPassword.value
        });
        alert('Your account has been successfully created. Please login');
        this.props.history.push('/')
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
                    <ControlLabel> Register for an Account </ControlLabel>
                    <FormGroup controlId="uname" bsSize="large">
                      <ControlLabel> Username </ControlLabel>
                      <FormControl
                        autoFocus
                        type="text"
                        value={this.state.uname}
                        onChange={this.handleChange}
                        inputRef = {ref => {this.inputUname = ref}}
                      />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                      <ControlLabel> Password </ControlLabel>
                      <FormControl
                        autoFocus
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        inputRef = {ref => {this.inputPassword = ref}}
                      />
                    </FormGroup>
                    <FormGroup controlId="cpassword" bsSize="large">
                      <ControlLabel> Confirm Password </ControlLabel>
                      <FormControl
                        autoFocus
                        type="password"
                        value={this.state.cpassword}
                        onChange={this.handleChange}
                        inputRef = {ref => {this.inputcassword = ref}}
                      />
                    </FormGroup>
                  <ButtonToolbar>
                    <div className='submit'>
                      <ButtonGroup className="buttons">
                         <Button
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
export default withRouter (Signup);
