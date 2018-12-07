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
      <div className="contracts">
        {contractItems}
      </div>
    )
  }
}

export default Contracts;
