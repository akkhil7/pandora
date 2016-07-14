import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import {Link} from 'react-router';


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
			var classVar = "ruby"
		else if(language == "python")
			var classVar = "python"
		else if(language == "javascript")
			var classVar = "javascript"
		else if(language == "clojure")
			var classVar = "clojure"
		else if(language == "haskell")
			var classVar = "haskell"
		
		else if(language == "android")
			var classVar = "android"
		else if(language == "reactnative")
			var classVar = "native"
		

		else if(language == "c#")
			var classVar = "chash"

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
              <Link to='codedesc' params={{id: code.id}}><button>view source</button></Link>
			</div>
			)
	}	
}

module.exports = CodeResultBox;


