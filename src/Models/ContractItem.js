import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card, CardTitle, CardText } from 'reactstrap'
import './ContractItem.css'
import Web3 from 'web3'

class ContractItem extends Component {
	constructor(props) {
		super(props)
		this.permRefs = []
		var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/"))
		web3.eth.defaultAccount = this.props.account
		this.curContract = web3.eth.contract(this.props.contract.abi).at(this.props.contract.addr);
		this.state = {
			show_panel: false
		}
		this.title = this.getContractName()
		this.perms = this.getPerms()
		this.payment = this.getPayment()
		this.totle = this.getTotal();
	}
	getPerms () {
		let i, l, r
		l = []
		for (i = 0; i < this.curContract.numPerms(); i++){
			r = React.createRef()
			this.permRefs.push(r)
			let perm = this.curContract.getPerms(i)
			l.push({
				title: perm[0],
				price: perm[1].toNumber(),
				perm: perm[2],
				idx: perm[3],
				reference: r,
				changed: false
			})
		}
		return l
	}
	getContractName () {
		return this.curContract.contractName()
	}
	getPayment () {
		return this.curContract.payment().toNumber()
	}
	getTotal () {
		return this.curContract.total().toNumber()
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
		this.perms.forEach(function (perm) {
			if (perm.changed) {
				changed = true;
				let newState = perm.reference.current.checked
				try
				{
					changeState(perm.idx.c[0], newState, (err) => {
						if (err) {
							console.log(err)
						}
					})
				} catch (err) {
					alert(err)
					changed = false
				}

			}
		});
		if (changed) alert('Your changes will take effect after around 1 min');
	}
	render() {
		const accordionState = this.state.show_panel ? 'active' : '';
		const accordionClass = `accordion ${accordionState}`;
		let permissions;
		permissions = this.perms.map(perm => {
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
<<<<<<< HEAD
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
					<p className="Total"> Potential earning: ${this.state.payment} </p>
					<p className="Total"> Total: ${this.state.payment} </p>
					<button className="closeButton" onClick={() => { this.togglePanel(); }}>
						Close
=======
						<hr />
					</div>
				);
			})
			return (
				<div>
					<button onClick={() => {this.togglePanel();}}
						className={accordionClass}>{this.title}
					</button>
					<div className="panel">
						{permissions}
						<p className="Total"> Total: ${this.payment} </p>
						<button className="closeButton" onClick={() => {this.togglePanel();}}>
							Close
>>>>>>> f8003f142c42458572fb1ed3abc39c1279822cd7
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
