import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Pro from './Pro';
import Serach from './Serach';
import TopMenu from './../components/TopMenu'
import About from './../components/About';
import Product from './../components/Product';
import Home from './../components/Home';

class Portal extends React.Component {

	render() {

		return (
			<div>
        <TopMenu/>
				<Switch>
          <Route path="/app"  exact={true} component={Pro} />
					<Route path="/app/product/:id"  component={Pro} />
					<Route path="/app/search"  component={Serach} />
          <Route path="/app/abc" component={Home}/>
          <Route path="/app/abc1" component={Product}/>
          <Route path="/app/abc2" component={About}/>
				</Switch>
			</div>
		)
	}
}

export default Portal;

