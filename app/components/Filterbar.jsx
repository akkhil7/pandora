import React from 'react';
import Router from 'react-router';
import Select from 'react-select';

class Filterbar extends React.Component{
	constructor(){
		super()

	}

	handleFilter(e){
		e.preventDefault();

		var type = e.target.getAttribute("data-filter-type")
		this.props.filter(e,type);
	}

   
	render(){
		return(
			   <div className='filterbar'>
			   <h1>Category</h1>
			   	<ul className="filter-section">
			   		<li data-filter-type="exercise" onClick={this.handleFilter.bind(this)} >Code Exercise</li>
			   		<li data-filter-type="web" onClick={this.handleFilter.bind(this)} >Web Apps</li>
			   		<li data-filter-type="mobile" onClick={this.handleFilter.bind(this)} >Mobile Apps</li>
			   	    <li data-filter-type="snippet" onClick={this.handleFilter.bind(this)} >Code Snippets</li>
			   	</ul>
			   </div>
			)
	}
}


module.exports = Filterbar;

// SEarchcode has a function
// WE want this function to be accessed in another component ( Filterbar)
// But this is not possible since they're two different components.
// So, we assign this function as a props (filter) of filterbar component.
// Now this function can be accessed in the filterbar component by this.props.filter()