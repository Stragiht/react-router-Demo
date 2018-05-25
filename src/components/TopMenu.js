import React from 'react';
import { Link } from 'react-router-dom'

class TopMenu extends React.Component {

	render() {
		return (
			<div>
				<ul>
					<li><Link to ={{ pathname: '/app/abc' , query : { day: 'Friday' }}}> 首页 </Link></li>
					<li><Link to ='/app/abc1'> 产品 </Link></li>
					<li><Link to ='/app/abc2'> 我们 </Link></li>

				</ul>

			</div>
		)
	}
}
export default TopMenu;


