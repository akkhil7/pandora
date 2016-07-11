import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import UserNavbar from './UserNavbar.jsx';
import Select from 'react-select';
import _ from 'lodash';
import CodeResultList from './CodeResultList.jsx';
import API from './API.js';
//import $ from 'jquery';
import Filterbar from './Filterbar.jsx';
import WebSidebar from './WebSidebar.jsx';
import MobileSidebar from './MobileSidebar.jsx';
import SnippetSidebar from './SnippetSidebar.jsx';
import dynamics from 'dynamics.js';

class SearchCode extends React.Component{
  constructor(){
    super()
    this.state = {
      isSearching: false,
      newResult: [],
      searchable: false,
      noMatchFlag: false,
      keyword: "",
      category: "",
      difficulty: "",
      language: ""
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    var keyword = this.refs.keyword.value.trim()
    var category = this.state.category
    this.setState({isSearching:true})

    var _data  = {

      keyword: keyword,
      category: category

    }

    var _this = this
    var url = API.url('codes/search')
    var success = function(res) {
      console.log(res)
      _this.setState({result : res, keyword: keyword})
    }
    var failure = function(res) {
      console.log(res)
      _this.setState({isError: true})

    }
    API.post(url,_data,success,failure);

  }

  handleLanguageFilter(e,language) {
    console.log(language)
    var category = this.state.category
    var keyword = this.state.keyword
    var data = {
      category: category,
      language: language
    }
    if(!_.isEmpty(keyword)) 
      _data.keyword = keyword


    var url = API.url('codes/search')
    var _this = this
    var success = function(res) {
      console.log(res)
      _this.setState({result: res, language: language})
    }
    var failure = (res) => {
      console.log(res)
      this.setState({isError: true})
    }

    API.post(url,data,success,failure)
  }


  changeCategoryState(category) {

    if(category=="web")
      this.setState({isWeb: true, isMobile: false, isSnippet: false}, 
                    this.animateSidebar.bind(this))
                    else if(category=="mobile")
                      this.setState({isMobile: true, isWeb: false, isSnippet: false},
                                    this.animateSidebar.bind(this))
                                    else
                                      this.setState({isSnippet: true, isWeb: false, isMobile: false}, 
                                                    this.animateSidebar.bind(this))

  }
  handleCategoryFilter(e,category) {
    console.log(category)

    var url = API.url('codes/search')
    var data = {
      category: category
    }

    this.changeCategoryState(category);

    var el = e.target
    var parent = el.parentNode.parentNode
    var li = parent.childNodes
    for(var i=0;i < li.length ;i++) {
      li[i].style.borderBottom = ''
    }
    el.parentNode.style.borderBottom = '2px solid #db4860'

    //ANIMATION CHAIN BEGINNING GOES HERE
    var success = (res) => {
      console.log(res)
      this.setState({result: res, category: category}, 
                    this.animateCategoryMenu.bind(this))
    }
    var failure = (res) => {
      console.log(res)
      this.setState({category: category,
                    isError: true})
    }

    API.post(url,data,success,failure);
  }

  handleDifficultyFilter(e,difficulty) {

    console.log(difficulty)

    var keyword = this.state.keyword
    var category = this.state.category
    var language = this.state.language

    var data = {
      category: category,
      difficulty: difficulty
    }
    if(!_.isEmpty(keyword))
      data.keyword = keyword
    if(!_.isEmpty(language))
      data.language = language

    var url = API.url('codes/search')

    var success = (res) => {
      console.log(res)
      this.setState({result: res, difficulty: difficulty})
    }

    var failure = (res) => {
      console.log(res)
      this.setState({isError: true})
    }

    API.post(url,data,success,failure)
  } 

  animateCategoryMenu() {
    var el = document.getElementsByClassName('filter-bar')[0]
    dynamics.animate(el, {
      width: '74.41059%'
    }, {
      type: dynamics.bezier,
      duration: 500,
      points: [{"x":0,"y":0,"cp":[{"x":0.1,"y":0}]},{"x":1,"y":1,"cp":[{"x":0.9,"y":1}]}],

      complete: this.toggleSearchable.bind(this)
    })

  }

  toggleSearchable() {
    this.setState({searchable: true}, this.animateSearchbar.bind(this))
  }

  animateSearchbar() {
    var el = document.getElementsByClassName('search-options')[0]
    console.log(el)
    dynamics.animate(el, {
      translateY: 100
    }, {
      type: dynamics.gravity,
      duration: 400
    })
  }

  animateSidebar() {
    var isWeb = this.state.isWeb
    var isMobile = this.state.isMobile
    var isSnippet = this.state.isSnippet
    var el = document.getElementsByClassName('filter-option-container')[0]
    dynamics.animate(el, {
      translateX: 200
    }, {
      type: dynamics.gravity,
      duration: 400
    })


  }
  render(){

    var options = [
      { value: 'ruby', label: 'Ruby' },
      { value: 'python', label: 'Python' },
      { value: 'javascript', label: 'Javascript' },
      { value: 'java', label: 'Java' }
    ];

    var display_none = <h2 className="no-result"> No Results </h2>
    var language = this.state.language

    var flag = this.state.noMatchFlag
    var searchable = this.state.searchable
    var isWeb = this.state.isWeb
    var isMobile = this.state.isMobile
    var isSnippet = this.state.isSnippet

    if(flag)
      var display = display_none
    else if(true)
      var display = <CodeResultList codes={this.state.newResult} />
    else if(!_.isEmpty(this.state.result))
      var display = <CodeResultList codes={this.state.result} />
    else
      var display = ""



    if(isWeb)
      var displaySidebar =   <WebSidebar
        languageFilter={this.handleLanguageFilter.bind(this)}
        difficultyFilter={this.handleDifficultyFilter.bind(this)}
      />
      else if(isMobile)
        var displaySidebar =    <MobileSidebar
          languageFilter={this.handleLanguageFilter.bind(this)}
          difficultyFilter={this.handleDifficultyFilter.bind(this)}
        />
        else if(isSnippet)
          var displaySidebar =    <SnippetSidebar
            languageFilter={this.handleLanguageFilter.bind(this)}
            difficultyFilter={this.handleDifficultyFilter.bind(this)}
          />
          else
            var displaySidebar = ""



          if(searchable)
            var displaySearchBar = ( <div className="search-options">
              <input ref="keyword" type="text" placeholder="Enter keyword" />
              <button onClick={this.handleSubmit.bind(this)} 
                className="search-button"> Search </button>
            </div>
                                   )
                                   return(
                                     <div className="search-code-container">
                                       <div className="header-wrapper">
                                         <div className="header">
                                           <div className="logo">
                                             <img src="img/logo2.png" />
                                           </div>
                                         </div>
                                       </div>
                                       <div className="search-result-wrapper">
                                         {displaySidebar}
                                         <div className="filter-bar-wrapper">
                                           <Filterbar
                                             categoryFilter={this.handleCategoryFilter.bind(this)}       

                                           />   
                                           {displaySearchBar}
                                         </div>
                                         {display}
                                       </div>
                                     </div>
                                   )
  }

}

module.exports = SearchCode;

