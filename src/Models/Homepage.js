import React, { Component } from 'react'
import YouTube from 'react-youtube'
import './Homepage.css'

    class Homepage extends Component {
	render () {
	    return (
		     <div className="row">
           <div className="leftColumn">
          <div className="card">
             <h2>Current Contracts</h2>
		      <p><b><a href="contract" target="_blank">Amazon</a></b></p>
		      <p><b><a href="contract" target="_blank">Fitbit</a></b></p>
         <p><b><a href="contract" target="_blank">Google</a></b></p>
            <p>Some text..</p>
          </div>
          <div className="card">
            <h2>title1</h2>
		     <div className="fakeimg" style={{height: 200}}>Image</div>
            <p>Some text..</p>
          </div>
        </div>
        <div className="rightColumn">
          <div className="card">
            <h2>My Wallet</h2>
		         <h3>$32</h3>
            <div className="fakeimg">wallet Image</div>
            <p>Some text </p>
          </div>
          <div className="card">
            <h3>You can earn more by sign up a new contract</h3>
		         <h5>add page for new contract link</h5>
		      <p><b><a href="contract" target="_blank">new</a></b></p>
		      <p><b><a href="contract" target="_blank">new</a></b></p>
		      <p><b><a href="contract" target="_blank">new</a></b></p>
          </div>
          <div className="card">
            <h3>title3</h3>
            <p>Some text..</p>
          </div>
        </div>

 </div>
		    )
		}
    }

export default Homepage;
