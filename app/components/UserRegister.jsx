import React from 'react';
import Router from 'react-router';
import Request from 'superagent';

class UserRegister extends React.Component{
	constructor(){
		super()
	}

	registerUser(e){
		e.preventDefault();
		var firstName = this.refs.firstname.value
		var lastName  = this.refs.lastname.value
		var email     = this.refs.email.value
		var username  = this.refs.username.value 
		var password  = this.refs.password.value

			var user={
				first_name: firstName,
				last_name: lastName,
				email: email,
				username: username,
				password: password
			}

			Request.post("http://localhost:3000/users")
			.send({user:user})
			.end((err,res) => {
			console.log(res)
			if(res.status==200)
				alert("Registered");
		    })
	}

	render(){
		return(
			<div>
		    <div className="register-bg"> </div>	
				<div className="register">
            		<input ref="firstname" type="text" placeholder="First Name" name="first name" />
					<input ref="lastname" type="text" placeholder="Last Name" name="last name" />
					<input ref="email" type="text" placeholder="Email" name="email" /> 
					<input ref="username" type="text" placeholder="Username" name="username" />
					<input ref="password" type="password" placeholder="Password" name="password" />
            		<input type="submit" value="Register" className="submit-long" onClick={this.registerUser.bind(this)}/>
				</div>
			</div>
			)
	}

}

module.exports = UserRegister;