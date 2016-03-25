import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import CodeResultBox from './CodeResultBox.jsx'

class CodeResultList extends React.Component{
	constructor(){
		super()
	}

	render(){
		var display = results.map(function(result) {
			return <CodeResultBox code={result} />
		})
		return(
			<div className="code-result-list">
              {display} 
			</div>
			)
	}	
}

module.exports = CodeResultList;