import React from 'react';
import Router from 'react-router';
import Select from 'react-select';


class MobileSidebar extends React.Component{
  constructor(){
    super()

  }

  render(){
    return(
     <div className='filter-option-container'> 
        <ul className='sidebar-language'>
          <h1>Mobile</h1>
          <h3>Platform</h3>
          <li data-language = 'antroid' >Antroid</li>
          <li data-language = 'ios' >IOS</li>
          <li data-language = 'native' >React Native</li>
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


module.exports = MobileSidebar;


