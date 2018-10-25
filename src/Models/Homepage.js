import React, { Component } from 'react'
import YouTube from 'react-youtube'
import './Homepage.css'

class Homepage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      titles: []
    }
    this.getContractName();
    // this.getPerms();
  }

  getContractName () {
    let CurrentContractTitle;
    if(this.props.contracts){
      CurrentContractTitle = this.props.contracts.map(contract =>{
        const contractABI = window.web3.eth.contract(contract.abi)
        const contractInstance = contractABI.at(contract.addr)
        const { contractName } = contractInstance;
        contractName((err, name) => {
          if (err) console.error ('An error occured::::', err);
          this.state.titles.push(name)
        });
      })
    }
  }

  //     const { numPerms } = contractInstance;
  // 		numPerms((err, permsCount) => {
  // 			if (err) console.error ('An error occured::::', err);
  // 			const contractABI = window.web3.eth.contract(this.props.contract.abi)
  // 			const contractInstance = contractABI.at(this.props.contract.addr)
  // 			let i;
  // 			for (i = 0; i < permsCount; i++){
  // 				let { getPerms } = contractInstance;
  // 				getPerms(i, (err, perm) => {
  // 					if (err) console.error ('An error occured::::', err);
  // 					// console.log(perm[0])
  // 					// console.log(perm[1]['c'][0])
  // 					// console.log(perm[2])
  //           this.state.
  // 					this.state.perms.push(
  // 						{
  // 							title: perm[0],
  // 							price: perm[1]['c'][0],
  // 							perm: perm[2]
  // 						}
  // 					)
  // 				})
  // 			}
  // 		});
  //   })
  // }

  render () {
    let ctitle;
    ctitle = this.state.titles.map(title => {
			return (
				<div key={title}>{title}</div>
      )
    })
    console.log(ctitle)
    return (
      <div className="row">
      <div className="leftColumn">
      <div className="card">
      <div className="title">
      <h2 className="titleText">Current Contracts</h2></div>
      <p><b>{ctitle}</b></p>

      <a href="contract">See more...</a>
      </div>
      <div className="card">
      <div className="title">
      <h2 className="titleText">You can earn more...</h2></div>
      <p><b><a href="contract" >View Contracts</a></b></p>
      </div>
      </div>
      <div className="rightColumn">
      <div className="card">
      <div className="title">
      <h2 className="titleText">My Wallet</h2></div>
      <h3>balance $32</h3>
      <h3>Income $5</h3>
      </div>
      <div className="card">
      <div className="title">
      <h2 className="titleText">Follow Us</h2></div>
      <p>Twitter</p>
      <p>Facebook</p>
      </div>
      <div className="card">
      <div className="title">
      <h2 className="titleText">title3</h2></div>
      <p>Some text..</p>
      </div>
      </div>
      </div>
    )
  }
}

export default Homepage;
