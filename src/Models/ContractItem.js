import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card, CardTitle, CardText  } from 'reactstrap'
import './ContractItem.css'

class ContractItem extends Component {
	constructor (props) {
		super(props)
		this.permRefs = []
		// should be from context
		this.account = '0xce8458cb49f4fa890bd22f936eafcca66d81ac2e'
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
					let r = React.createRef();
					this.permRefs.push(r)
					this.state.perms.push(
						{
							title: perm[0],
							price: perm[1]['c'][0],
							perm: perm[2],
							idx: perm[3]['c'][0],
							reference: r,
							changed: false
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
	handleSubmit () {
		// console.log(this.permRefs[0].current.checked)
		alert('Your changes will take effect after around 1 min')
		const contractABI = window.web3.eth.contract(this.props.contract.abi)
		const contractInstance = contractABI.at(this.props.contract.addr)
		const { changeState } = contractInstance;
		this.state.perms.forEach(function(perm) {
			if (perm.changed)
			{
				console.log("changing::: ", perm.title)
				let newState = perm.reference.current.checked
				changeState(perm.idx, newState, (err) => {
					if (err) {
						console.log(err)
					}
				})
			}
		});
	}
	render () {
		const accordionState = this.state.show_panel ? 'active' : '';
		const accordionClass = `accordion ${accordionState}`;
		let permissions;
		permissions = this.state.perms.map(perm => {
			return (
				<div key={perm.title}>
					<p className="contractText">{perm.title}
						<label className="switch">
							<input
								ref={perm.reference}
								type="checkbox"
								defaultChecked={perm.perm ? 'checked' : ''}
								onClick={() => {perm.changed = true}}
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
						<button className="closeButton" onClick={() => {this.togglePanel();}}>
							Close
						</button>
						<button className="submitButton right" onClick={() => {this.handleSubmit();}}>
							Submit
						</button>
				</div>
			</div>
		)
	}
}

export default ContractItem;
