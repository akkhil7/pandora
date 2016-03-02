import React from 'react';
import Router from 'react-router';
import Request from 'superagent';

class UserLogin extends React.Component{
	constructor(){
		super()
	}
	
	handleLogin(e){
		e.preventDefault()
		var username = this.refs.username.value;
		var password = this.refs.password.value;
    
        var user={
        	username:username,
        	password:password
        }

        Request.post("http://localhost:3000/tokens/verify")
        .send({user:user})
        .end(function(res,err){
          console.log(res)
        })
	}
	render(){
		return(
			<div className='login'>
				<input ref="username" type="text" placeholder="username" name="username" />
				<input ref="password" type="text" placeholder="password" name="password" />
				<input type="submit" value="Login" className="submit-long" onClick={this.handleLogin.bind(this)}/>
			</div>
			)
	}

}

module.exports = UserLogin;