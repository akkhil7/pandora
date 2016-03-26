import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import UserNavbar from './UserNavbar.jsx';
import Select from 'react-select';
import CodeResultList from './CodeResultList.jsx';
import API from './API.js';

class SearchCode extends React.Component{
	constructor(){
		super()
		this.state = {
			isSearching:false
		}
	}

		
	handleSubmit(e) {
		e.preventDefault();
		this.setState({isSearching:true})

		var difficulty = this.state.difficulty
		var language = this.state.language
		var keyword = this.refs.keyword.value

		var _data  = {

			difficulty: difficulty,
			language: language,
			keyword: keyword
		
		}
		
		var url = API.url('codes/search')
		var success = function(res) {
			console.log(res)
		}
		var failure = function(res) {
			console.log(res)
		}
		API.post(url,_data,success,failure);
	
      
	}
	changeLang(val) {
		this.setState({ language: val})
		console.log(val)
	}
	changeDiff(val) {
		this.setState({ difficulty: val})
	}
	render(){

		var options = [
		{ value: 'ruby', label: 'Ruby' },
		{ value: 'python', label: 'Python' }
		];

		var d_options=[
		{ value: 'easy', label: 'Easy'},
		{ value: 'medium', label: 'Medium'},
		{ value: 'hard', label: 'Hard'}
		];
        
		var display_none = <h2> No Results </h2>
		var language = this.state.language
		var difficulty = this.state.difficulty

		var display = this.state.isSearching ? <CodeResultList /> : display_none

		return(
			<div>
				<UserNavbar />
				<div className="search-wrapper">
					<h1>Search Codes</h1>
					<h2>Keyword</h2>
					<h2>Language</h2>
					<h2>Difficulty</h2>
					<input ref="keyword" type="text" placeholder="Enter keyword" />


					<Select
					name="language-selectname"
					className='select'
					value={language}
					onChange={this.changeLang.bind(this)}
					searchable={false}
					options={options}
					/>

					<Select
					name="difficulty-select"
					className='select'
					onChange={this.changeDiff.bind(this)}
					searchable={false}
					value={difficulty}
					options={d_options}
					/>



					<button onClick={this.handleSubmit.bind(this)} 
					className="search-button"> Search </button>

				</div>
				{display}
			</div>

			)
	}

}

module.exports = SearchCode;