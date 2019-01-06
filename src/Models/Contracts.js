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
          <p>Below are your current contracts.
          You can earn money by sharing your data.
          Click on each contract item below and
          change the settings inside of them to earn more.</p>
        </div>
        <div className="contracts">
        {contractItems}
        </div>
      </div>
    )
  }
}

export default Contracts;
