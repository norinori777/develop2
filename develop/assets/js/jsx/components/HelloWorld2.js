import React, {Component, PropTypes} from 'react'

export default class HelloWorld2 extends Component {
	constructor(props) {
	  super(props)
	}
	render(){
		return (
			<div>Hello2 {this.props.name}</div>
		)
	}
}
HelloWorld2.propTypes = {
	name: React.PropTypes.string.isRequired
}