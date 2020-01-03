import { connect } from "react-redux";
import Greeting from './greeting';
import { signUpUser, loginUser, logoutUser } from '../actions/session_actions'

const mapStateToProps = ({entities, session}) => (
    {
        currentUser: entities.users[session.id]
    }
)

const mapDispatchToProps = dispatch => (
    {
        signup: (user) => dispatch(signUpUser(user)),
        login: (user) => dispatch(loginUser(user)),
        logout: () => dispatch(logoutUser()) 
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Greeting);