import React from 'react';
import Router from 'react-router';
import Select from 'react-select';


class SnippetSidebar extends React.Component{
  constructor(){
    super()

  }

  render(){
    return(
      <div className='filter-option-container'> 
        <h3>Language</h3>

        <ul className='sidebar-options'>
          <li data-language = 'python' >Python</li>
          <li data-language = 'ruby' >Ruby</li>
          <li data-language = 'java'>Java</li>
          <li data-language = 'javascript'>Javascript</li>
          <li data-language = 'c' >C</li>
          <li data-language = 'c++'>C++</li>
          <li data-language = 'c#'>C#</li>
          <li data-language = 'clojure'>Clojure</li>
          <li data-language = 'haskell'>Haskell</li>
          <li data-language = 'html'>HTML and CSS</li>
        </ul>
        <h3>Difficulty</h3>

        <ul className='sidebar-options'>
          <li data-difficulty = 'easy' >Easy</li>
          <li data-difficulty = 'medium' >Medium</li>
          <li data-difficulty = 'hard' >Hard</li>
        </ul>
      </div>
    )
  }
}


module.exports = SnippetSidebar;


