import React from 'react';
import Router from 'react-router';
import UserNavbar from './UserNavbar.jsx';
import API from './API.js';

class CodeDesc extends React.Component{
	constructor(){
		super()
	}
	componentDidMount() {
	    var id  = this.props.params.id
	    var url = API.url('codes',id)
	    var success = function(res) {
        	console.log('success')
        }
    	var failure = function(res) {
      	console.log('failure')
        }
	    API.get(url,success,failure)  
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