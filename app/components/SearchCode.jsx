import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import UserNavbar from './UserNavbar.jsx';
import Select from 'react-select';

class SearchCode extends React.Component{
	constructor(){
		super()
	}

	render(){
		var options = [
    { value: 'one', label: 'Ruby' },
    { value: 'two', label: 'Python' }
	];

	     var doptions=[
	     { value: 'one', label: 'Easy'},
	     { value: 'two', label: 'Medium'},
	     { value: 'three', label: 'Hard'}
	     ];
		return(
			<div>
				<UserNavbar />
				<div className="search-wrapper">
					<h1>Search Codes</h1>
					<h2>Keyword</h2>
					<h2>Language</h2>
					<h2>Difficulty</h2>
                    	<input ref="keyword" type="text" placeholder="Enter keyword" />
                    	

					<Select
    					name="form-field-name"
    					className='select'
    					value="one"
    					options={options}
					/>

					<Select
    					name="form-field-name"
    					className='select'
    					value="one"
    					options={doptions}
					/>



					<input type="submit" value="Search" className="search-button"/>
				</div>			
			</div>
			)
	}

}

module.exports = SearchCode;