import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'

export class Main extends Component {
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
