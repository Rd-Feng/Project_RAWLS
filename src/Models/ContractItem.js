import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card, CardTitle, CardText  } from 'reactstrap'
import './ContractItem.css'

class ContractItem extends Component {
	constructor (props) {
		super(props)
		this.state = {
			show_panel: false
		}
	}
	togglePanel () {
		let news = !this.state.show_panel
		this.setState({show_panel: news})
	}
	resetContract () {
		let news = !this.state.show_panel
		this.setState({show_panel: news})
		news = !news
		this.setState({show_panel: news})
	}
	render () {
		const accordionState = this.state.show_panel ? 'active' : '';
		const accordionClass = `accordion ${accordionState}`;
		let permissions;
		permissions = this.props.contract.perms.map(perm => {
			return (
				<div key={perm.title}>
					<p><span className="contractText">{perm.title} </span>
						<label className="switch">
							<input
								type="checkbox"
								defaultChecked={perm.perm ? 'checked' : ''}
							/> <span className="buttonWrapper">
							<span className="slider round"></span></span>
						</label></p>
					</div>
				);
			})

			return (
				<div>
					<button onClick={() => {this.togglePanel();}}
						className={accordionClass}>{this.props.contract.title}
					</button>
					<div className="panel">
						{permissions}
						<button className="close" onClick={() => {this.togglePanel();}}>
							Close
						</button>
						<button className="submit right">
							Submit
						</button>
						<button className="close right" onClick={() => {this.resetContract();}}>
							Reset
						</button>
					</div>
				</div>
			)
		}
	}

	export default ContractItem;
