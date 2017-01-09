import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import HelloWorld_child from './HelloWorld_child.js'

class HelloWorld extends Component {
	constructor(props) {
	  super(props)
	}
	render(){
		return (
			<div>
				<div>Hello {this.props.rootReducer.name}</div>
				<HelloWorld_child son_name={this.props.rootReducer.childname} />
			</div>
		)
	}
}
HelloWorld.propTypes = {
	name: React.PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(HelloWorld)