import React, { Component } from 'react'
import './styles.css'

class ContractItem extends Component {
	constructor(props) {
    super(props)
    this.state = {
    	items: [
      	{ text: "Amazon", open: false },
        { text: "Fitbit", open: false },
        { text: "Google", open: false }
      ]
    }
  }
  toggleState = (index) => {
    var newItems = this.state.items;
    newItems[index].open = !newItems[index].open;
    this.setState({items: newItems})
  }

  render () {
    return (
      <div className="main">
        <ol>
        {this.state.items.map((item, idx) => {
        const accordionState = item.open ? 'active' : '';
        const accordionClass = `accordion ${accordionState}`;
        return (
          <div  key={idx}>
            <button onClick={() => {
            this.toggleState(idx);}} className={accordionClass}>{item.text}</button>
            <div className="panel">
             <span>Age</span>
                <label className="switch">
                  <input type="checkbox"/>
                  <span className="slider round"></span>
                </label>
                
              <p>Gender
                <label className="switch">
                  <input type="checkbox"/>
                  <span className="slider round"></span>
                </label></p>
              <p>Location
                <label className="switch">
                  <input type="checkbox"/>
                  <span className="slider round"></span>
                </label>
               </p>
              <button className="submit">Submit</button>
              <button className="cancel">Cancel</button>
            </div>            
          </div>
        )
        })}
          </ol>
        </div>
    )
  }
}

export default ContractItem;
