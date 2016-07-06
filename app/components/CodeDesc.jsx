import React from 'react';
import Router from 'react-router';
import UserNavbar from './UserNavbar.jsx';

class CodeDesc extends React.Component{
	constructor(){
		super()
	}

	render(){
		return(
			<div>
				<UserNavbar />
            </div>
			)
	}
}

module.exports = CodeDesc;