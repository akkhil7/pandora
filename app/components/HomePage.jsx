"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import dynamics from 'dynamics.js'
class HomePage extends React.Component{

  constructor () {
    super()
  }

  componentDidMount() {
    var el = document.getElementsByClassName('container')[0]
    dynamics.animate(el, {
      translateY: 200,
      opacity: 1
    }, {
      type: dynamics.spring,
      frequency: 200,
      friction: 200,
      duration: 1000
    })
  }

  render () {
    return (
      <div id="homepage-wrapper">
        <div className="container">
          <h2>&lt;CodeDammit/&gt;</h2>
          <button className="submit"> Submit Your Code </button>
          <h3>You can find all the <em>"codedamn"</em> gods here.</h3>

          <input type="text" name="search" placeholder="Enter keyword or language"/>
          <button className="search"> SEARCH </button>
        </div>
      </div>
    );
  }
}

module.exports = HomePage;
