import {connect} from 'react-redux'
import HelloWorld from '../components/HelloWorld.js'

const mapStateToProps = (state) => {
    return {
        name: state.rootReducer.name,
        childname: state.rootReducer.childname
    }
}

export default connect(mapStateToProps)(HelloWorld)