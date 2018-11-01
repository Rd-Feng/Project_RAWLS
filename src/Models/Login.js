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
    
    this.state = { 
        email: '',
        password: '',
        isLoggedIn: false
    };
  }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
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
                        <ButtonToolbar>
                            <ButtonGroup>
                                <Button
                                    bsStyle="info"
                                    disabled={!this.validateForm()}
                                    href="/homepage"
                                >
                                    Login
                                </Button>
                            </ButtonGroup>
                            
                            <ButtonGroup>
                                <Button
                                    type="submit"
                                >
                                    Register
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
