import React from 'react';
import Router from 'react-router';
import UserNavbar from './UserNavbar.jsx';
import Request from 'superagent';
import Select from 'react-select';
import API from './API.js';
import TagsInput from 'react-tagsinput'

class CreateCode extends React.Component{
	constructor(){
		super()
		this.state={
			language:'ruby',
			difficulty:'easy',
		    category:'web'
		}
	}
	handleSubmit(e){
		e.preventDefault();
		var codename = this.refs.name.value
		var language = this.state.language
		var difficulty = this.state.difficulty
		var app_link = this.refs.app_link.value
		var github_link = this.refs.github_link.value
		var category = this.state.category
		var description = this.refs.description.value

		var data={
			name: codename,
			language: language,
			difficulty: difficulty,
			link: app_link,
			github_link: github_link,
			category: category,
			description: description
		}
		console.log(data);
		var _this = this
		var url = API.url('codes')
		var success = function(res) {
			console.log(res)
		}
		var failure = function(res) {
		     console.log(res) 
		}
		API.post(url,data,success,failure);
	}
	changeLang(val) {
		this.setState({ language: val})
	} 
	
	changeDiff(val) {
		this.setState({ difficulty: val})
	} 

	changeCat(val){
		this.setState({ category: val})
	}
	render(){
		var language=this.state.language
		var difficulty=this.state.difficulty
        var category=this.state.category

		var options = [
		{ value: 'ruby', label: 'Ruby' },
		{ value: 'python', label: 'Python' }
		]

		var d_options = [
			{ value: 'easy', label: 'Easy'},
			{ value: 'meduim', label: 'Medium'},
			{ value: 'hard', label: 'Hard'}
		]

		var c_options =[
            { value: 'web',label:'Web App'},
            { value: 'mobile',label:'Mob App'},
            { value: 'snippet',label:'Code Snippet'}
		]
		  
		return(
			<div className = 'createcode-outer-wrapper'>
				 <div className="header-container">
         			 <div className="header">
            			<div className="logo">
              				<img src="img/logo2.png" />
            			</div>
            			<button className='sign-in'>Login / Register</button>
          			</div>
        		</div>
				<div className='createcode-wrapper'>



					<div className='code-container'>
					<input ref="name" type="text" placeholder="Enter Name" className="code_name"/>

					
					<Select
					name='language-select'
					className='select'
					value={language}
					onChange={this.changeLang.bind(this)}
					options={options}
					/>

					<Select
					name='difficulty-select'
					className='difficulty-field'
					value={difficulty}
					onChange={this.changeDiff.bind(this)}
					options={d_options}
					/>
                     
                    <Select
					name='category-select'
					className='select'
					value={category}
					onChange={this.changeCat.bind(this)}
					options={c_options}
					/>
					
					<input ref="app_link" type="text" placeholder="App link" className="app_link" />
					<input ref="github_link" type="text" placeholder="Github link" className="github_link" />	
                    <textarea ref="description" id="txtArea" rows="8" placeholder="App description"></textarea>
				    <input type="submit" value="Submit" className="submit_long" onClick={this.handleSubmit.bind(this)}/>
					</div>
				</div>
			</div>
			)
	}

}

module.exports = CreateCode;
