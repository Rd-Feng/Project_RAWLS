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
			correctpasswd: '',
			err_msg: ''
		}
	}

	queryDatabase(uname) {
		var db = fire.database();
		var ref = db.ref('Users');

		if (this.state.email == '' || this.state.password == '') {
			this.setState({err_msg: "username or password missing"});
			return;
		}
		db.ref('Users').child(uname).once('value').then(
			data => {
				if (data.val()) {
					this.setState({
						correctpasswd: data.val().Password,
						correctuname: data.val().Username,
						err_msg: "logging in"
					}, () => {
						this.handleSubmit();
						this.updateLocalStorage();
					})
				}
				else {
					this.setState({
						correctpasswd: '',
						correctuname: '',
						err_msg: ""
					}, () => {
						this.handleSubmit();
						this.updateLocalStorage();
					});
				}
			}
		).catch(err => {console.log(err)});
	}
	componentWillMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	updateLocalStorage() {
		localStorage.clear();
		localStorage.setItem("email", this.state.email);
		localStorage.setItem("addr", this.props.address);
	}

	handleKeyPress(event) {
		if (event.keyCode != 13) return;
		this.queryDatabase(this.state.email);
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	}
	handleSubmit() {
		if (this.state.correctuname == '')
			this.setState({err_msg: 'username not found'});
		else if (this.state.password == this.state.correctpasswd) {
			var ref = fire.database().ref('Users')
			var userRef = ref.child(this.state.email);
			this.props.contracts.map(contract => {
        userRef.update({
					[contract.company] : contract.addr
				});
			})
			this.props.history.push('/homepage');
		}
		else
			this.setState({err_msg: 'incorrect password'})
	}

	render() {
		return (
			<div className="Login">
				<form onSubmit={this.registerUser}>
					<div className="login_intro">
						<h3>RAWLS</h3>
						<p>Giving control and transparency on the privacy and monetary value of your data.</p>
					</div>
					<div className="login_content">
						<FormGroup controlId="email" bsSize="large">
							<ControlLabel> Username </ControlLabel>
							<FormControl
								autoFocus
								type="text"
								onChange={this.handleChange}
								inputRef={ref => { this.inputEmail = ref }}
							/>
						</FormGroup>
						<FormGroup controlId="password" bsSize="large">
							<ControlLabel> Password </ControlLabel>
							<FormControl
								type="password"
								onChange={this.handleChange}
								inputRef={ref => { this.inputPassword = ref }}
							/>
						</FormGroup>
						<div>
							<div className="errormsg">
								<p>{this.state.err_msg}</p>
							</div>
							<ButtonToolbar >
								<div className='buttonDIV'>
									<ButtonGroup className="touch">
										<Button
											bsStyle="info"
											onClick={() => {
												this.queryDatabase(this.state.email);
											}}
											>
												Login
											</Button>
										</ButtonGroup>
									</div>
								</ButtonToolbar>
							</div>
						</div>
					</form>
				</div>
			);
		}
	}
	export default withRouter (Login);
