import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import App from './components/App.jsx';
import UserRegister from './components/UserRegister.jsx';
import UserLogin from './components/UserLogin.jsx';
import UserDashBoard from './components/UserDashBoard.jsx';
import SearchCode from './components/SearchCode.jsx';
import CreateCode from './components/CreateCode.jsx';
import CodeDesc from './components/CodeDesc.jsx' ;
import HomePage from './components/HomePage.jsx'


var routes = (
  <Route name="app" path="/" handler={ App }>
    <DefaultRoute handler={HomePage} />
  	<Route name="register" path="/register" handler={ UserRegister } />
  	<Route name="login" path="login" handler={ UserLogin } />
  	<Route name="dashboard" path="dashboard" handler={ UserDashBoard } />
  	<Route name="searchcode" path="search" handler={ SearchCode } />
  	<Route name="createcode" path="create" handler={ CreateCode } />
  	<Route name="codedesc" path="codes/:id" handler={ CodeDesc } />
  </Route>
);

export default routes; 
