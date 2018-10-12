import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card, CardTitle, CardText  } from 'reactstrap'
import './ContractItem.css'

class ContractItem extends Component {
	constructor (props) {
		super(props)
		let name = this.getName();
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
				show_panel: false,
				title: this.getName(),
				perms: "TODO - load permissions"
			}
		);
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
