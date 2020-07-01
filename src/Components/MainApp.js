
import App from '../App'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from '../Redux/actions'

// import {withRouter} from 'react-router'

function mapStateToProps(state){
    return {
        allPhotos : state.allPhotos,
        comments: state.comments
    }
}


function mapDispatchToProps  (dispatch) { 
    return bindActionCreators(actions,dispatch)
 }

const MainApp = connect(mapStateToProps, mapDispatchToProps)(App)




//const MainApp = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
export default MainApp