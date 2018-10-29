import React, { Component } from 'react'
import './Wallet.css'
class Wallet extends Component {
  render(){
    return (
      <div className="CardContainer">
        <div className="walletCard">
          <h2 className="walletText"> My Wallet </h2>

          <p className="balanceText"> Balance
          <span className="balanceValue"> $23 </span></p>

          <button className="redeem">Redeem</button>
          <p className="incomeText"> Income
          <span className="incomeValue"> $3 </span></p>
          </div>

          <table className="transactionTable">
          <caption className="transactionHeader">
          <div className="transactionText">
          Transaction
          </div>
          </caption>

          <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Balance</th>
          </tr>

          <tr>
          <td>10/28/2018</td>
          <td>Amazon</td>
          <td>$1</td>
          <th>$6</th>
          </tr>
          <tr>
          <td>10/27/2018</td>
          <td>Google</td>
          <td>$3</td>
          <th>$5</th>
          </tr>
          <tr>
          <td>09/26/2018</td>
          <td>Amazon</td>
          <td>$2</td>
          <th>$2</th>
          </tr>
          </table>
      </div>


    )
  }
}
export default Wallet;
