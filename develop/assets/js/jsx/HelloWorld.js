import React, {Component, PropTypes} from 'react'

export default class HelloWorld extends Component {
	constructor(props) {
	  super(props)
	}
	render(){
		return (
			<div>Hello {this.props.name}</div>
		)
	}
}
HelloWorld.propTypes = {
	name: React.PropTypes.string.isRequired
}