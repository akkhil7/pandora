 import React from 'react';
import Router from 'react-router';
import Request from 'superagent';

class UserNavbar extends React.Component{
	constructor(){
		super()
	}
	render(){
		return(
			<div className='Navbar'>
				<ul className='Navbar-contents'>
					<li className="logo"><h2>Space</h2><h6> Back</h6></li>
					<li>one</li>
					<li>two</li>
					<li>three</li>
					<li>four</li>
					<li>five</li>
				</ul>
			</div>
			)
	}
}

module.exports = UserNavbar;