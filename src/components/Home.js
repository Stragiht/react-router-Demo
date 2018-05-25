import React from 'react';

class Home extends React.Component {
	constructor (props){
		super(props)
    console.log( this.props.location.query.day);
  }
	render() {
		return (
			<h1>hihihihi</h1>
		);
	}
}

export default Home;