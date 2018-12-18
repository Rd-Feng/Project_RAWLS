import React, { Component } from 'react'
import './styles/Wallet.css'
class Wallet extends Component {
  render(){
    return (
      <div className="background-container">
        <div className="transaction-container">
          <div className="balance-container">
            <br></br>
            <div className="balance">
              <p> Balance of this account</p>
              <p className="balance-amount"> $ <b>73</b>.00 </p>
              <p className="redeemed"> Amount redeemed: $25.00 </p>
            </div>
            <br></br>
            <div className="current-contracts">
              <p> Number of active contracts: 3</p>
              <p> Number of inactive contracts: 0 </p>
            </div>
            <br></br>
            <br></br>
            <div className="redemption">
              <button> Redeem </button>
            </div>
          </div>
          <div className="transaction-history">
            <br></br>
            <div className="history-label">
              <p> ID# </p>
              <p> Date </p>
              <p> Company </p>
              <p> Type </p>
              <p> Amount </p>
            </div>
            <hr/>
            <div className="transaction">
              <p> 9009 </p>
              <p> July 20, 2018 </p>
              <p>
                <img src={require(`./images/Amazon Prime.png`)}/>
              </p>
              <p> Deposit </p>
              <p className="Deposit-Amount"> +$4.00 </p>
            </div>
            <div className="transaction">
              <p> 9008 </p>
              <p> July 19, 2018 </p>
              <p>
                <img src={require(`./images/Fitbit.png`)}/>
              </p>
              <p> Deposit </p>
              <p className="Deposit-Amount"> +$3.00 </p>
            </div>
            <div className="transaction">
              <p> 9007 </p>
              <p> July 15, 2018 </p>
              <p>
                <img src={require(`./images/Google Map.png`)}/>
              </p>
              <p> Deposit </p>
              <p className="Deposit-Amount"> +$1.00 </p>
            </div>
            <div className="transaction">
              <p> 9006 </p>
              <p> June 29, 2018 </p>
              <p> --- </p>
              <p> Withdrawal </p>
              <p className="Withdrawal-Amount"> -$25.00 </p>
            </div>
            <div className="transaction">
              <p> 9005 </p>
              <p> June 20, 2018 </p>
              <p>
                <img src={require(`./images/Amazon Prime.png`)}/>
              </p>
              <p> Deposit </p>
              <p className="Deposit-Amount"> +$4.00 </p>
            </div>
            <div className="transaction">
              <p> 9004 </p>
              <p> June 19, 2018 </p>
              <p>
                <img src={require(`./images/Fitbit.png`)}/>
              </p>
              <p> Deposit </p>
              <p className="Deposit-Amount"> +$3.00 </p>
            </div>
            <div className="transaction">
              <p> 9003 </p>
              <p> June 15, 2018 </p>
              <p>
                <img src={require(`./images/Google Map.png`)}/>
              </p>
              <p> Deposit </p>
              <p className="Deposit-Amount"> +$1.00 </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Wallet;
