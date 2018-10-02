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
	toggleState () {
		let news = !this.state.show_panel
		this.setState({show_panel: news})
	}
	render () {
		const accordionState = this.state.show_panel ? 'active' : '';
		const accordionClass = `accordion ${accordionState}`;
		let permissions;
			permissions = this.props.contract.perms.map(perm => {
				return (
					<div key={perm.title}>
						<p>{perm.title}
							<label className="switch">
								<input
									type="checkbox"
									defaultChecked={perm.perm ? 'checked' : ''}
								/>
								<span className="slider round"></span>
							</label></p>
						</div>
					);
				})

			return (
				<div>
					<button onClick={() => {this.toggleState();}}
						className={accordionClass}>{this.props.contract.title}
					</button>
					<div className="panel">
						{permissions}
						<button className="submit">Submit</button>
						<button className="cancel">Cancel</button>
					</div>
				</div>
			)
		}
	}

	export default ContractItem;
