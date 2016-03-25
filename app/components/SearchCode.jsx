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

	componentDidMount() {
		var url = API.url('users')
		var success = function(res) {
			console.log(res)
		}
		var failure = function(res) {
			console.log(res)
		}
		API.get(url,success,failure);
	}
	handleSubmit(e) {
		e.preventDefault();
		this.setState({isSearching:true})

		var difficulty = this.state.difficulty
		var language = this.state.language
		var keyword = this.refs.keyword

		var _data  = {
			difficulty: difficulty,
			language: language,
			keyword: keyword
		}
		


	}
	changeLang(val) {
		this.setState({ difficulty: val})
	}
	changeDiff(val) {
		this.setState({ language: val})
	}
	render(){

		var options = [
		{ value: 'one', label: 'Ruby' },
		{ value: 'two', label: 'Python' }
		];

		var doptions=[
		{ value: 'one', label: 'Easy'},
		{ value: 'two', label: 'Medium'},
		{ value: 'three', label: 'Hard'}
		];
        
		var display_none = <h2> No Results </h2>

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
					name="form-field-name"
					className='select'
					value="one"
					onChange={this.changeLang.bind(this)}
					searchable={false}
					options={options}
					/>

					<Select
					name="form-field-name"
					className='select'
					onChange={this.changeDiff.bind(this)}
					searchable={false}
					value="one"
					options={doptions}
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