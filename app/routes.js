import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import App from './components/App.jsx';
import UserRegister from './components/UserRegister.jsx';

var routes = (
  <Route name="app" path="/" handler={ App }>
  	<Route name="user-register" path="/user/register" handler={ UserRegister } />
  </Route>
);

export default routes;
