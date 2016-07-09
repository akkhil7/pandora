import React from 'react';
import Router from 'react-router';
import Select from 'react-select';
import dynamics from 'dynamics.js'

class Filterbar extends React.Component{
  constructor(){
    super()

  }

  filterExercise(e){
    e.preventDefault();
    this.props.exercise(e);
  }

  filterWeb(e) {
    e.preventDefault();
    this.props.web(e);
  }

  filterMobile(e) {
    e.preventDefault();
    this.props.mobile(e)
  }

  filterSnippet(e) {
    e.preventDefault();
    this.props.snippet(e)
  }

  render(){
    return(
      <div className='filter-bar'>
        <ul className="filter-section">
          <li data-filter-type="exercise" onClick={this.filterExercise.bind(this)}><span>CODE EXERCISES</span></li>
          <li data-filter-type="web" onClick={this.filterWeb.bind(this)}><span>WEB APPS</span></li>
          <li data-filter-type="mobile" onClick={this.filterMobile.bind(this)}><span>MOBILE APPS</span></li>
          <li data-filter-type="snippet" onClick={this.filterSnippet.bind(this)}><span>CODE SNIPPETS</span></li>
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
