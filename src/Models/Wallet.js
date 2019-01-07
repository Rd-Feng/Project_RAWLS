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
              <p> Account Balance </p>
              <p className="balance-amount"> $ <b>3</b>.20 </p>
              <p className="redeemed"> Amount redeemed: $1.00 </p>
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
                <img alt="Amazon" src={require(`./images/Amazon Prime.png`)}/>
              </p>
              <p> Deposit </p>
              <p className="Deposit-Amount"> +$0.10 </p>
            </div>
            <div className="transaction">
              <p> 9008 </p>
              <p> July 19, 2018 </p>
              <p>
                <img alt="FittBit"src={require(`./images/Fitbit.png`)}/>
              </p>
              <p> Deposit </p>
              <p className="Deposit-Amount"> +$0.05 </p>
            </div>
            <div className="transaction">
              <p> 9007 </p>
              <p> July 15, 2018 </p>
              <p>
                <img alt="Google Map" src={require(`./images/Google Map.png`)}/>
              </p>
              <p> Deposit </p>
              <p className="Deposit-Amount"> +$0.05 </p>
            </div>
            <div className="transaction">
              <p> 9006 </p>
              <p> June 29, 2018 </p>
              <p> --- </p>
              <p> Withdrawal </p>
              <p className="Withdrawal-Amount"> -$1.00 </p>
            </div>
            <div className="transaction">
              <p> 9005 </p>
              <p> June 20, 2018 </p>
              <p>
                <img alt="Amazon" src={require(`./images/Amazon Prime.png`)}/>
              </p>
              <p> Deposit </p>
              <p className="Deposit-Amount"> +$0.10 </p>
            </div>
            <div className="transaction">
              <p> 9004 </p>
              <p> June 19, 2018 </p>
              <p>
                <img alt="Fitbit" src={require(`./images/Fitbit.png`)}/>
              </p>
              <p> Deposit </p>
              <p className="Deposit-Amount"> +$0.05 </p>
            </div>
            <div className="transaction">
              <p> 9003 </p>
              <p> June 15, 2018 </p>
              <p>
                <img alt="Google Map" src={require(`./images/Google Map.png`)}/>
              </p>
              <p> Deposit </p>
              <p className="Deposit-Amount"> +$0.05 </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Wallet;
