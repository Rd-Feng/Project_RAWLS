import React, { Component } from 'react'
import './styles/ContractItem.css'
import Web3 from 'web3'

class ContractItem extends Component {
    constructor(props) {
        super(props)
        this.permRefs = []
        var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/"))
        web3.eth.defaultAccount = this.props.account
        this.curContract = web3.eth.contract(this.props.contract.abi).at(this.props.contract.addr);
        this.state = {
            show_panel: false
        }
        this.title = this.getContractName()
        this.perms = this.getPerms()
        this.payment = this.getPayment()
        this.total = this.getTotal();
    }
    getPerms () {
        let i, l, r
        l = []
        for (i = 0; i < this.curContract.numPerms(); i++){
            r = React.createRef()
            this.permRefs.push(r)
            let perm = this.curContract.getPerms(i)
            console.log(perm);
            l.push({
                title: perm[0],
                desc: perm[1],
                price: perm[2].toNumber() / 10,
                perm: perm[3],
                idx: perm[4],
                reference: r,
                changed: false
            })
        }
        return l
    }
    getContractName () {
        return this.curContract.contractName()
    }
    getPayment () {
        return this.curContract.payment().toNumber() / 10
    }
    getTotal () {
        return this.curContract.total().toNumber() /10
    }
    togglePanel() {
        let news = !this.state.show_panel
        this.setState({ show_panel: news })
    }
    handleSubmit() {
        const contractABI = window.web3.eth.contract(this.props.contract.abi)
        const contractInstance = contractABI.at(this.props.contract.addr)
        const { changeState } = contractInstance;
        let changed = false, ids = [], count = 0
        this.perms.forEach(function (perm) {
            if (perm.changed) {
                ids.push(perm.idx)
                count++
                changed = true
            }
        });
        try
        {
            changeState(ids, count, (err) => {
                if (err) {
                    console.log(err)
                }
            })
        } catch (err) {
            alert(err)
            changed = false
        }
        if (changed) alert('Your changes will take effect in ~1 min');
    }

    render() {
        let permissions, popupRef, popupId;
        popupRef = "#popup" + this.title.split(' ').join('_');
        popupId = "popup" + this.title.split(' ').join('_');
        permissions = this.perms.map(perm => {
            return(
                <div key={perm.title}>
                    <div className="info_dp_contract">
                        <div className="info_contract">i</div>
                        <div className="info_dp-content_contract">
                            <p className="infoTextContract">{perm.desc}</p>
                        </div>
                    </div>
                    <p className="contractText">{perm.title}
                        <span className="PermPrice"> {'\u00A0'}${perm.price}</span>
                        <label className="switch">
                            <input
                                ref={perm.reference}
                                type="checkbox"
                                defaultChecked={perm.perm ? 'checked' : ''}
                                onClick={() => { perm.changed = !perm.changed }}
                            />
                            <span className="slider round"></span>
                        </label></p>
                        <hr />
                    </div>
                )
            })
            return (
                <div className="contract_container">
                    <div className="contract_box">
                        <a className="contract_item" href={popupRef}>
                            <img className="comany_logo"  alt="company logo" src={require(`./images/${this.title}.png`)}/>
                            <div className="logo_overlay">
                                <h2>{this.title}</h2>
                                <p>Current Total: ${this.payment}{'\u00A0'}</p>
                                <p>Potential Earning: {'\u00A0'}${this.total}</p>
                            </div>
                        </a>
                    </div>
                    <div id={popupId} className="contract_overlay">
                        <div className="contract_content">
                            <a className="contract_close" href="#contract_box">&times;</a>
                            <h4>{this.title}</h4>
                            <p>Select the data you want to share by using the toggle switches.
                                Once done, press the submit button or the "X" to cancel</p>
                                <div className="text_box">
                                    {permissions}
                                    
                                </div>
                                <div className="total_text">
                                <p className="total_amount"> Total: ${this.payment}/mo </p>
                                <span><button className="submitButton right" onClick={() => { this.handleSubmit(); }}>
                                        Submit
                                    </button></span>
                                    <p className="Total"> Potential earning: ${this.total}/mo </p>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                )
            }
        }
        export default ContractItem;
