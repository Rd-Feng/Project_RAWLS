import React, { Component } from 'react'
import ContractItem from './ContractItem'
import './styles/Contracts.css'

class Contracts extends Component {
  constructor(props){
    super(props);
    this.state = {contracts: this.props.contracts}
  }

  render () {
    let contractItems;
    if(this.state.contracts){
      contractItems = this.state.contracts.map(contract => {
        return (
          <div className="Ccard" key={contract.addr}>
            <ContractItem contract={contract} account={this.props.account}/>
          </div>
        );
      });
    }
    return (
      <div className="contract_page">
        <div className="description">
          <p>Here are your current contracts.

          <br/>Clicking on a company below and opens your contract.
          <br/>Change the settings to control how your data is used.</p>
        </div>
        <div className="contracts">
        {contractItems}
        </div>
      </div>
    )
  }
}

export default Contracts;
