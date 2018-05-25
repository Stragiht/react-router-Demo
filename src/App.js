import React, { Component } from 'react';

import './App.css';
import {Router , Route ,Switch} from 'react-router-dom'
import history from './history';

import Portal from './components/Portal';

import Login from './system/login'
class App extends Component {
	render() {
		return (
					<Router  history={history}>
						<div className="app">
              <Switch>
							<Route exact={true} path="/" component={Login}  />
							<Route exact={true} path="/login" component={Login}  />
							<Route path="/app" component={Portal} />
              </Switch>
						</div>
					</Router>


		);
	}
}

export default App;