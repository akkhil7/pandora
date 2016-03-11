import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import UserNavbar from './UserNavbar.jsx';

class UserDashBoard extends React.Component{
	constructor(){
		super()
	}
	render(){
		return(
			<UserNavbar />
			)
	}
}

module.exports = UserDashBoard;