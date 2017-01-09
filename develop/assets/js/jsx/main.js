import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {connect} from 'react-redux'

class Main extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(Main)
