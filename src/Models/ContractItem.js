import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card, CardTitle, CardText } from 'reactstrap'
import './ContractItem.css'

class ContractItem extends Component {
	constructor(props) {
		super(props)
		this.permRefs = []
		this.l = []
		// should be from context
		this.account = '0xce8458cb49f4fa890bd22f936eafcca66d81ac2e'
		this.state = {
			show_panel: false,
			perms: []
		}
	}
	componentDidMount() {
		this.getContractName();
		this.getPerms();
		this.getPayment();
		this.getTotal();
	}
	getPerms() {
		const contractABI = window.web3.eth.contract(this.props.contract.abi)
		const contractInstance = contractABI.at(this.props.contract.addr)
		const { numPerms } = contractInstance;
		numPerms((err, permsCount) => {
			if (err) console.error('An error occured::::', err);
			const contractABI = window.web3.eth.contract(this.props.contract.abi)
			const contractInstance = contractABI.at(this.props.contract.addr)
			let i;
			for (i = 0; i < permsCount; i++) {
				let { getPerms } = contractInstance;
				getPerms(i, (err, perm) => {
					if (err) console.error('An error occured::::', err);
					let r = React.createRef();
					this.permRefs.push(r)
					this.l.push({
						title: perm[0],
						price: perm[1]['c'][0],
						perm: perm[2],
						idx: perm[3],
						reference: r,
						changed: false
					})
					// this.state.perms.push(
					// 	{
					// 		title: perm[0],
					// 		price: perm[1]['c'][0],
					// 		perm: perm[2],
					// 		idx: perm[3],
					// 		reference: r,
					// 		changed: false
					// 	}
					// )
				})
			}
		});
		this.setState({ perms: this.l })
	}
	getContractName() {
		const contractABI = window.web3.eth.contract(this.props.contract.abi)
		const contractInstance = contractABI.at(this.props.contract.addr)
		const { contractName } = contractInstance;
		contractName((err, name) => {
			if (err) console.error('An error occured::::', err);
			this.setState({ title: name })
		});
	}
	getPayment() {
		const contractABI = window.web3.eth.contract(this.props.contract.abi)
		const contractInstance = contractABI.at(this.props.contract.addr)
		const { payment } = contractInstance;
		payment((err, p) => {
			if (err) console.error('An error occured::::', err);
			// console.log('payment::: ', p['c'][0])
			this.setState({ payment: p['c'][0] })
		});
	}
	getTotal() {
		const contractABI = window.web3.eth.contract(this.props.contract.abi)
		const contractInstance = contractABI.at(this.props.contract.addr)
		const { total } = contractInstance;
		total((err, t) => {
			if (err) console.error('An error occured::::', err);
			// console.log('Total::: ', t['c'][0])
			this.setState({ total: t['c'][0] })
		});
	}
	togglePanel() {
		let news = !this.state.show_panel
		this.setState({ show_panel: news })
	}
	handleSubmit() {
		const contractABI = window.web3.eth.contract(this.props.contract.abi)
		const contractInstance = contractABI.at(this.props.contract.addr)
		const { changeState } = contractInstance;
		let changed = false;
		this.state.perms.forEach(function (perm) {
			if (perm.changed) {
				changed = true;
				let newState = perm.reference.current.checked
				changeState(perm.idx.c[0], newState, (err) => {
					if (err) {
						console.log(err)
					}
				})
			}
		});
		if (changed) alert('Your changes will take effect after around 1 min');
	}
	render() {
		const accordionState = this.state.show_panel ? 'active' : '';
		const accordionClass = `accordion ${accordionState}`;
		let permissions;
		permissions = this.state.perms.map(perm => {
			return (
				<div key={perm.title}>
				<div className="info_dp_contract">
							<i className="fa fa-fw fa-info info_contract"></i>
							<div className="info_dp-content_contract">
								<p className="infoTextContract">PermPrice info</p>
							</div>
						</div>
					<p className="contractText">{perm.title}
						<span className="PermPrice"> {'\u00A0'}${perm.price}</span>
						
						<label className="switch">
							<input
								ref={perm.reference}
								type="checkbox"
								defaultChecked={perm.perm ? 'checked' : ''}
								onClick={() => { perm.changed = !perm.changed }}
							/>
							<span className="slider round"></span>
						</label></p>
					<hr />
				</div>
			);
		})
		return (
			<div>
				<button onClick={() => { this.togglePanel(); }}
					className={accordionClass}>{this.state.title}
				</button>
				<div className="panel">
					{permissions}
					<p className="Total"> Total: ${this.state.payment} </p>
					<button className="closeButton" onClick={() => { this.togglePanel(); }}>
						Close
						</button>
					<button className="submitButton right" onClick={() => { this.handleSubmit(); }}>
						Submit
						</button>
				</div>
			</div>
		)
	}
}

export default ContractItem;
