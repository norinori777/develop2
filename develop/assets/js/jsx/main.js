import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {connect} from 'react-redux'
import HelloWorld from './HelloWorld.js'

class Main extends Component {
    render(){
        return (
            <div>
                <HelloWorld name="kawai" />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
export default connect (mapStateToProps)(Main)
