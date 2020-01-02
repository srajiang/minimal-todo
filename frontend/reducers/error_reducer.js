import { RECEIVE_ERRORS, CLEAR_ERRORS } from './../actions/error_actions';


const errorReducer = (state = {}, action) => {


    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        
        case RECEIVE_ERRORS:
            newState["errors"] = action.errors
            return newState;

        case CLEAR_ERRORS:
            newState["errors"] = action.error
            return newState;

        default:
            return state;
    }
}

export default errorReducer;