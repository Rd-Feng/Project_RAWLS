import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card, CardTitle, CardText  } from 'reactstrap'
import './ContractItem.css'

class ContractItem extends Component {
	constructor (props) {
		super(props)
		//	{
		//     title: "Google",
		//     perms: [
		//       {title: "name", perm: true},
		//       {title: "age", perm: false},
		//       {title: "work_phone", perm: true},
		//       {title: "home_phone", perm: false}
		//     ]
		//  },
	}
	componentDidMount(){
		this.setState(
			{
				show_panel: false
			}
		);
		const contractABI = window.web3.eth.contract(this.props.contract.abi)
		const contractInstance = contractABI.at(this.props.contract.addr)
		const { contractName } = contractInstance;
		contractName((err, name) => {
			if (err) console.error ('An error occured::::', err);
			console.log ('Contract name: ', name);
		});
		let i = 0;
		for (i = 0; i < 4; i++){
			let { getPerms } = contractInstance;
			getPerms(i, (err, perm) => {
				if (err) console.error ('An error occured::::', err);
				console.log('Data Name:: ', perm[0])
				console.log('Price:: ', perm[1]['c'][0])
				console.log('Shared:: ', perm[2])
			});
		}
	}
	getName () {
		return ("TODO - get name of contract")
	}
	togglePanel () {
		let news = !this.state.show_panel
		this.setState({show_panel: news})
	}
	render () {
		// const accordionState = this.state.show_panel ? 'active' : '';
		// const accordionClass = `accordion ${accordionState}`;
		// let permissions;
		// permissions = this.props.contract.perms.map(perm => {
		// 	return (
		// 		<div key={perm.title}>
		// 			<p>{perm.title}
		// 				<label className="switch">
		// 					<input
		// 						type="checkbox"
		// 						defaultChecked={perm.perm ? 'checked' : ''}
		// 					/>
		// 					<span className="slider round"></span>
		// 				</label></p>
		// 			</div>
		// 		);
		// 	})

		return (
			<div>
				{/* <button onClick={() => {this.togglePanel();}}
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
</div> */}
</div>
)
}
}

export default ContractItem;
