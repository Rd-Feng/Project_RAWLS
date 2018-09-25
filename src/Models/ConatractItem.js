import React, { Component } from 'react'
import './ConatractItem.css'

class ContractItem extends Component {

  render () {
    return (
      <div className= "main">
        <button className="accordion">Amazon</button>
        <div className="panel">
          <p>Age
            <label className="switch">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>></p>
            <p>Gender
              <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
              </label></p>
              <p>Location
                <label className="switch">
                  <input type="checkbox"/>
                  <span className="slider round"></span>
                </label></p>
                <button className="submit">Submit</button>
                <button className="cancel">Cancel</button>
              </div>
            </div>
          );
        }
      }

      export default ContractItem;
