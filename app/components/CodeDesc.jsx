import React from 'react';
import Router from 'react-router';
import UserNavbar from './UserNavbar.jsx';
import API from './API.js';
import StarRating from 'react-star-rating';

class CodeDesc extends React.Component{
  constructor(){
    super()
    this.state = {
      result: {}
    }
  }
  componentDidMount() {
    var id  = this.props.params.id
    var url = API.url('codes',id)
    var success = (res) => {
      console.log('success')
      console.log(res)
      this.setState({result: res})
    }
    var failure = function(res) {
      console.log('failure')
    }
    API.get(url,success,failure)  
  }

  handleRate(e, {position, rating, caption, name}) {
    e.preventDefault()
    console.log("rated" + rating + " " + position)
    var el = document.getElementsByClassName('rsr-container')[0]
    el.style.display = "none"
    localStorage.hasRated = true
    var x = document.getElementsByClassName('code-desc-body')[0]
    var newEl = document.createElement('h3')
    newEl.style.color = '#db4860'
    newEl.innerHTML = "Thanks for rating!"
    x.appendChild(newEl)
  }
  render(){
    var code = this.state.result
    var lang = _.capitalize(code.language)
    var diff = _.capitalize(code.difficulty)

    if(localStorage.hasRated)
      var display = <h3 style={{color: '#db4860'}}> Thanks for rating!</h3>
    else
      var display = <StarRating className="star-rating" name="airbnb-rating" size={20}
             totalStars={5} onRatingClick={this.handleRate.bind(this)} />
          
  return(
      <div  className = 'description-container'>
        <div className="header-wrapper">
          <div className="header">
            <div className="logo">
              <img src="img/logo2.png" />
            </div>
            <button className='sign-in'>Login / Register</button>
          </div>
        </div>
        <div className="code-desc-wrapper">
          <div className="code-desc-header">
            <h1>{code.name}</h1>
            <p>{code.description}</p>
          </div>
          <div className="code-desc-body">
            <h2> Difficulty </h2>
            <h2> Language </h2>
            <h2> Rating <small>(4.6/5)</small> </h2>
            <h3> {diff} </h3>
            <h3>{lang}</h3>
            {display}
          </div>
        </div>
      </div>   
    )
  }
}

module.exports = CodeDesc;
