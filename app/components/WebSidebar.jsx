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
        <ul className='sidebar-language'>
          <h1>WEB</h1>
          <h3>Language</h3>
          <li data-language = 'python' >Python</li>
          <li data-language = 'ruby' >RUby</li>
          <li data-language = 'javascript'>Javascript</li>
          <li data-language = 'c#'>C#</li>
          <li data-language = 'clojure'>Clojure</li>
          <li data-language = 'haskell'>Haskell</li>
          <li data-language = 'html'>HTML and CSS</li>
        </ul>
        <ul className='sidebar-difficulty'>
          <h3>difficulty</h3>
          <li data-difficulty = 'easy' >Easy</li>
          <li data-difficulty = 'medium' >Medium</li>
          <li data-difficulty = 'hard' >Hard</li>
        </ul>
    </div>
    )
  }
}


module.exports = WebSidebar;


