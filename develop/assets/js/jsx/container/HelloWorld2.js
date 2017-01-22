import {connect} from 'react-redux'
import HelloWorld2 from '../components/HelloWorld2.js'

const mapStateToProps = (state) => {
    return {
        name: state.rootReducer.name,
        childname: state.rootReducer.childname
    }
}

export default connect(mapStateToProps)(HelloWorld2)