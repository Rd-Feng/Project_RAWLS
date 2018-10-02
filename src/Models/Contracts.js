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
      {
        title: "Amazon",
        perms: [
          {title: "name", perm: true},
          {title: "age",  perm: false},
          {title: "email", perm: true},
          {title: "purchase_record", perm: true}
        ]
      },
      {
        title: "Fitbit",
        perms: [
          {title: "name", perm: true},
          {title: "age", perm: false},
          {title: "location", perm: true}
        ]
      },
      {
        title: "Google",
        perms: [
          {title: "name", perm: true},
          {title: "age", perm: false},
          {title: "work_phone", perm: true},
          {title: "home_phone", perm: false}
        ]
      },
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
