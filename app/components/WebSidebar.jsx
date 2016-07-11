import React from 'react';
import Router from 'react-router';
import Select from 'react-select';


class WebSidebar extends React.Component{
  constructor(){
    super()

  }

  render(){
    return(
      <div className='filter-option-container'> 
        <h3>Language</h3>
        <ul className='sidebar-language'>
          <li data-language = 'python' >Python</li>
          <li data-language = 'ruby' >Ruby</li>
          <li data-language = 'javascript'>Javascript</li>
          <li data-language = 'clojure'>Clojure</li>
          <li data-language = 'haskell'>Haskell</li>
          <li data-language = 'html'>HTML and CSS</li>
          <li><button data-language="go">Go</button></li>
        </ul>
        <h3>Difficulty</h3>
        <ul className='sidebar-difficulty'>
          <li data-difficulty = 'easy' >Easy</li>
          <li data-difficulty = 'medium' >Medium</li>
          <li data-difficulty = 'hard' >Hard</li>
        </ul>
      </div>
    )
  }
}


module.exports = WebSidebar;


