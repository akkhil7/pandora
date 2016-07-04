import React from 'react';
import Router from 'react-router';
import Select from 'react-select';

class Filterbar extends React.Component{
	constructor(){
		super()
	}

	handleFilter(e){
		e.preventDefault();
		var that = e.target
		var type = e.target.getAttribute('value')
		console.log(that)
		e.target.setAttribute('checked',true)
		this.props.filter(e,this,type)
	}


	render(){
		return(
			   <div className='filterbar'>
			   <h1>Category</h1>
			   	<ul className="filter-section">
			   		<li className="exercise">Code Exercise</li>
			   		<li className="webapps">Web Apps</li>
			   		<li className="mobile">Mobile Apps</li>
			   	    <li className="codesnippets">Code Snippets</li>
			   	</ul>
			   </div>
			)
	}
}


module.exports = Filterbar;
