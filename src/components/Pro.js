import React from 'react';

class Pro extends React.Component {
	constructor (props){
		super(props)
    console.log(this.props.match.params);


  }
	render() {
		return (
			<h1>我是pro</h1>
		);
	}
}

export default Pro;