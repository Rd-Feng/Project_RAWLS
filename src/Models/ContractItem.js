import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card, CardTitle, CardText  } from 'reactstrap'
import './ContractItem.css'

class ContractItem extends Component {
	constructor (props) {
		super(props)
		this.state = {
			show_panel: false,
			perms: []
		}
		this.getContractName();
		this.getPerms();
	}
	getPerms () {
		const contractABI = window.web3.eth.contract(this.props.contract.abi)
		const contractInstance = contractABI.at(this.props.contract.addr)
		const { numPerms } = contractInstance;
		numPerms((err, permsCount) => {
			if (err) console.error ('An error occured::::', err);
			const contractABI = window.web3.eth.contract(this.props.contract.abi)
			const contractInstance = contractABI.at(this.props.contract.addr)
			let i;
			for (i = 0; i < permsCount; i++){
				let { getPerms } = contractInstance;
				getPerms(i, (err, perm) => {
					if (err) console.error ('An error occured::::', err);
					this.state.perms.push(
						{
							title: perm[0],
							price: perm[1]['c'][0],
							perm: perm[2]
						}
					)
				})
			}
		});
	}
	getContractName () {
		const contractABI = window.web3.eth.contract(this.props.contract.abi)
		const contractInstance = contractABI.at(this.props.contract.addr)
		const { contractName } = contractInstance;
		contractName((err, name) => {
			if (err) console.error ('An error occured::::', err);
			this.setState({title: name})
		});
	}
	togglePanel () {
		let news = !this.state.show_panel
		this.setState({show_panel: news})
	}
	render () {
		const accordionState = this.state.show_panel ? 'active' : '';
		const accordionClass = `accordion ${accordionState}`;
		let permissions;
		permissions = this.state.perms.map(perm => {
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
					<button onClick={() => {this.togglePanel();}}
						className={accordionClass}>{this.state.title}
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
