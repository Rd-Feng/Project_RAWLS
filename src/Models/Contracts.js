import React, { Component } from 'react'
import ContractItem from './ContractItem'
import './Contracts.css'

class Contracts extends Component {
  constructor(){
    super();
    this.getContracts();
  }

  /* function to load all contracts into state */
  getContracts () {
    this.state = {contracts:[
      { title: "Amazon", open: false },
      { title: "Fitbit", open: false },
      { title: "Google", open: false }
    ]};
  }

  render () {
    let contractItems;
    if(this.state.contracts){
      contractItems = this.state.contracts.map(contract => {
        return (
          <ContractItem key={contract.title} contract={contract}/>
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
