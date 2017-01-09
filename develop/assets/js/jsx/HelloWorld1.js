import React, {Component, PropTypes} from 'react'

export default class HelloWorld1 extends Component {
	constructor(props) {
	  super(props)
	}
	render(){
		return (
			<div>Hello1 {this.props.name}</div>
		)
	}
}
HelloWorld1.propTypes = {
	name: React.PropTypes.string.isRequired
}