import React, { Component } from 'react'
import './styles/Wallet.css'
class Wallet extends Component {
  render(){
    return (
        <div className="wallet-container">
            <div className="trans-label">
                <p> Transaction History </p>
            </div>
            <div className="trans-history">
                <div className="table-labels">
                    <span> Date </span>
                    <span> Company </span>
                    <span> Type </span>
                    <span> Amount </span>
                </div>
                <hr className="main-hr"/>
                <div className="transaction-list">
                    <div className="transaction">
                        <p>    June 6, 2018  </p>
                        <p>    Google      </p>
                        <p>    Deposit    </p>
                        <p>    + $1.00     </p>
                    </div>
                    <hr className="sub-hr"/>
                    <div className="transaction">
                        <p>    June 6, 2018   </p>
                        <p>    Fitbit        </p>
                        <p>    Deposit    </p>
                        <p>    + $3.00     </p>
                    </div>
                    <hr className="sub-hr"/>
                    <div className="transaction">
                        <p>    June 25, 2018</p>
                        <p>    Amazon    </p>
                        <p>    Deposit    </p>
                        <p>    + $3.00 </p>
                    </div>
                    <hr className="sub-hr"/>
                    <div className="transaction">
                        <p>    July 2, 2018 </p>
                        <p>         ---         </p>
                        <p>  Withdrawal</p>
                        <p>     - $7.00 </p>
                    </div>
                    <hr className="sub-hr"/>
                    <div className="transaction">
                        <p>    July 6, 2018  </p>
                        <p>    Google      </p>
                        <p>    Deposit    </p>
                        <p>    + $1.00     </p>
                    </div>
                    <hr className="sub-hr"/>
                    <div className="transaction">
                        <p>    July 6, 2018   </p>
                        <p>    Fitbit        </p>
                        <p>    Deposit    </p>
                        <p>    + $3.00     </p>
                    </div>
                    <hr className="sub-hr"/>
                    <div className="transaction">
                        <p>    July 25, 2018</p>
                        <p>    Amazon    </p>
                        <p>    Deposit    </p>
                        <p>    + $3.00 </p>
                    </div>
                </div>
            </div>
            <hr className="main-hr"/>
            <div className="wallet-balance">
                <p> Balance </p>
                <p> $ 7.00 </p>
            </div>
            <br/>
        </div>
    )
  }
}
export default Wallet;
