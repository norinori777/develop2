import React, {Component, PropTypes} from 'react'
import HelloWorld_child from './HelloWorld_child.js'

export default class HelloWorld extends Component {
	constructor(props) {
	  super(props)
	}
	render(){
		return (
			<div>
				<div>Hello {this.props.name}</div>
				<HelloWorld_child childname={this.props.childname} />
			</div>
		)
	}
}
HelloWorld.propTypes = {
	name: React.PropTypes.string.isRequired
}

