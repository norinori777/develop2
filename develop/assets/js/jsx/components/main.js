import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {Link} from 'react-router'

export class Main extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <ul>
					<li><Link to="/" activeClassName="HelloWorld">HelloWorld</Link></li>
					<li><Link to="/1" activeClassName="HelloWorld1">HelloWorld1</Link></li>
					<li><Link to="/2" activeClassName="HelloWorld2">HelloWorld2</Link></li>
				</ul>
                {this.props.children}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(Main)
