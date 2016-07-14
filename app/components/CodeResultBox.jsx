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
	
    if(language == "c#")
      var classVar = "csharp"
    else if(language == "c++")
      var classVar = "cpp"
    else
      var classVar = language

		return(
			<div key={code.id} className="code-result-box">
			  <h1>{code.name}</h1>
			  <h2 className={classVar}>{code.language}</h2>
			  <h2 className={code.difficulty}>{code.difficulty}</h2>
              <Link to='codedesc' params={{id: code.id}}><button>view source</button></Link>
			</div>
			)
	}	
}

module.exports = CodeResultBox;


