import React from 'react';
import Router from 'react-router';
import Select from 'react-select';

class Filterbar extends React.Component{
	constructor(){
		super()
	}


	render(){
		return(
			   <div className='filterbar'>
			   	<div className="filter-section">
			   		<h3>Category</h3>
			        <input type="checkbox" id="katas" value="katas"/><label htmlFor="katas">Code Katas</label>
			   		<input type="checkbox" id="webapps" value="webapps"/><label htmlFor="webapps">Web Apps</label>
			   		<input type="checkbox" id="mobile" value="mobile"/><label htmlFor="mobile">Mobile Apps</label>
			   	    <input type="checkbox" id="codesnippets" value="codesnippets"/><label htmlFor="codesnippets">Code Snippets</label>
			   	</div>
			   </div>
			)
	}
}


module.exports = Filterbar;
