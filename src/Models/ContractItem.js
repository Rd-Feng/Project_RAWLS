import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card, CardTitle, CardText  } from 'reactstrap'
import './ContractItem.css'

class ContractItem extends Component {
	constructor (props) {
		super(props)
		this.state = {
			show_panel: this.props.contract.open
		}
	}
	toggleState () {
		this.props.contract.open = !this.props.contract.open
		this.setState({show_panel: this.props.contract.open})
	}

	render () {
		const accordionState = this.state.show_panel ? 'active' : '';
		const accordionClass = `accordion ${accordionState}`;
		return (
			<div className="allContracts">
					<button onClick={() => {this.toggleState();}}
						className={accordionClass}>{this.props.contract.title}
					</button>
					<div className="panel">
					 <span>Age</span>
							<label className="switch">
								<input type="checkbox"/>
								<span className="slider round"></span>
							</label>

						<p>Gender
							<label className="switch">
								<input type="checkbox"/>
								<span className="slider round"></span>
							</label></p>
						<p>Location
							<label className="switch">
								<input type="checkbox"/>
								<span className="slider round"></span>
							</label>
						 </p>
						 <div className="buttonContainer">
						<button className="submit">Submit</button>
						<button className="cancel">Cancel</button>
					</div>
					</div>
				</div>

						)
					}
				}

				export default ContractItem;
