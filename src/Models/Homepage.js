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
	       <p><b><a href="contract">Amazon</a></b></p>
	       <p><b><a href="contract" >Fitbit</a></b></p>
               <p><b><a href="contract" >Google</a></b></p>
              <p>Some text..</p>
           </div>
          <div className="card">
		     <h2>You have the potential to earn up to $15</h2>
                         <h5>add page for new contract link</h5>
                      <p><b><a href="contract" >new</a></b></p>
                      <p><b><a href="contract" >new</a></b></p>
                      <p><b><a href="contract" >new</a></b></p>
		     </div>
        </div>
        <div className="rightColumn">
          <div className="card">
            <h2>My Wallet</h2>
		         <h3>balance $32</h3>
		     <h3>Income $5</h3>
            <div className="fakeimg">wallet Image</div>
            <p>Some text </p>
          </div>
          <div className="card">
		     <h2>title1</h2>
                     <div className="fakeimg" style={{height: 200}}>Image</div>
            <p>Some text..</p>
          </div>
          <div className="card">
            <h2>title3</h2>
            <p>Some text..</p>
          </div>
        </div>

 </div>
		    )
		}
    }

export default Homepage;
