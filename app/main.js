import React from 'react';
import Router, {browserHistory} from 'react-router';
import routes from './routes';
import ReactDOM from 'react-dom';

Router.run(routes, Handler => ReactDOM.render(<Handler history={browserHistory} />, document.getElementById('app')));
