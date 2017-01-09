import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

export default class HelloWorld_child extends Component {
	constructor(props) {
	  super(props)
	}
	render(){
		return (
			<div>Hello Child {this.props.son_name}</div>
		)
	}
}
HelloWorld_child.propTypes = {
	son_name: React.PropTypes.string.isRequired
}
