import React, { Component } from 'react'
import './Wallet.css'
class Wallet extends Component {
  render(){
    return (
      <div className="CardContainer">
        <div className="walletCard">
          <h2 className="walletText"> My Wallet </h2>

          <div className="balanceContainer">
          <p className="balanceText"> Total Balance:</p>
          <p className="balanceValue"> $28 </p>
          </div>

          <div className="incomeContainer">
          <p className="incomeText"> Monthly Income:</p>
          <p className="incomeValue"> $3 </p>
          </div>

            <button className="redeem">Redeem</button>
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
          <th>Monthly Income</th>
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
