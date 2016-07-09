import React from 'react';
import Router from 'react-router';
import Select from 'react-select';
import dynamics from 'dynamics.js'

class Filterbar extends React.Component{
  constructor(){
    super()

  }

  filterCategory(e){
    e.preventDefault();
    var category = e.target.getAttribute('data-filter-type')
    this.props.categoryFilter(e,category)
  }

  render(){
    return(
      <div className='filter-bar'>
        <ul className="filter-section">
          <li data-filter-type="web" onClick={this.filterCategory.bind(this)}><span data-filter-type="web">WEB</span></li>
          <li data-filter-type="mobile" onClick={this.filterCategory.bind(this)}><span data-filter-type="mobile">MOBILE</span></li>
          <li data-filter-type="snippet" onClick={this.filterCategory.bind(this)}><span data-filter-type="snippet">SNIPPETS</span></li>
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
