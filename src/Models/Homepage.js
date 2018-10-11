import React, { Component } from 'react'
import YouTube from 'react-youtube'
import './Homepage.css'

    class Homepage extends Component {
	render () {
	    return (
          <div className="row">
            <div className="leftColumn">
              <div className="card">
			         <div className="title">
			            <h2 className="titleText">Current Contracts</h2></div>
			               <p><b>Amazon</b></p>
			               <p><b>Fitbit</b></p>
                     <p><b>Google</b></p>
                     <a href="contract">See more...</a>
              </div>
              <div className="card">
			         <div className="title">
		             <h2 className="titleText">You can earn more...</h2></div>
                      <p><b><a href="contract" >View Contracts</a></b></p>
              </div>
            </div>
            <div className="rightColumn">
              <div className="card">
			           <div className="title">
                  <h2 className="titleText">My Wallet</h2></div>
			            <h3>balance $32</h3>
			            <h3>Income $5</h3>
              </div>
              <div className="card">
			          <div className="title">
			             <h2 className="titleText">Follow Us</h2></div>
                   <p>Twitter</p>
                   <p>Facebook</p>
              </div>
              <div className="card">
			           <div className="title">
                  <h2 className="titleText">title3</h2></div>
                  <p>Some text..</p>
              </div>
        </div>
 </div>
		    )
		}
    }

export default Homepage;
