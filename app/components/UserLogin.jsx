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
        .end((err,res) => {
          console.log(res)
          var response = JSON.parse(res.text)
          console.log(response)
          if(res.status == 200)
          	localStorage.user_token = response.token
        })
	}
	render(){
		return(
			<div>
				<div className='login-bg'></div>
				<div className='login'>
					<input ref="username" type="text" placeholder="username" />
					<input ref="password" type="password" placeholder="password" />
					<input type="submit" value="Login" className="submit-long" onClick={this.handleLogin.bind(this)}/>
				</div>
			</div>
			)
	}

}

module.exports = UserLogin;