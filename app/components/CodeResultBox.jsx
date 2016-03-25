import React from 'react';
import Router from 'react-router';
import Request from 'superagent';



class CodeResultBox extends React.Component{
	constructor(){
		super()
	}

	render(){
		this.props.code 
		return(
			<div className="code-result-box">
			  <h1>{code.title}</h1>
			</div>
			)
	}	
}

module.exports = CodeResultBox;