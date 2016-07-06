import React from 'react';
import Router from 'react-router';
import Request from 'superagent';



class CodeResultBox extends React.Component{
	constructor(){
		super()
	}

	descdisplay(e){
		var desc = this.state.description
	}

	render(){
		var code = this.props.code
		var language = code.language
		var diff = code.difficulty
		if(language == "ruby")
			var classVar = "red"
		else if(language == "python")
			var classVar = "green"
		else if(language == "javascript")
			var classVar = "yellow"
		else
			var classVar = "grey"

		if(diff == "easy")
			var _classVar = "easy"
		else if(diff =="medium")
			var _classVar = "medium"
		else
			var _classVar = "hard"
		return(
			<div key={code.id} className="code-result-box">
			  <h1>{code.name}</h1>
			  <h2 className={classVar}>{code.language}</h2>
			  <h2 className={_classVar}>{code.difficulty}</h2>
			  <button>view source</button>
			</div>
			)
	}	
}

module.exports = CodeResultBox;

