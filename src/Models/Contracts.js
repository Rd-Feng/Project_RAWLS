import React, { Component } from 'react'
import ContractItem from './ContractItem'
import './Contracts.css'

class Contracts extends Component {
  constructor(props){
    super(props);
    this.state = {contracts: this.props.contracts}
  }

  render () {
    let contractItems;
    console.log(this.state.contracts)
    if(this.state.contracts){
      contractItems = this.state.contracts.map(contract => {
        return (
          <div className="Ccard">
            <ContractItem key={contract.addr} contract={contract}/>
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
