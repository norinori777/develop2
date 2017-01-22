import {connect} from 'react-redux'
import HelloWorld1 from '../components/HelloWorld1.js'

const mapStateToProps = (state) => {
    return {
        name: state.rootReducer.name,
        childname: state.rootReducer.childname
    }
}

export default connect(mapStateToProps)(HelloWorld1)