import React, { Component } from 'react'
import ContractItem from './ContractItem'

class Contracts extends Component {

  render () {
    return (
      <div className="contracts">
        <ContractItem />
        <ContractItem />
        <ContractItem />
      </div>
    )
  }
}

export default Contracts;
