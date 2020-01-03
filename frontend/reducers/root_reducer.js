import { combineReducers } from 'redux';
import errorReducer from './error_reducer';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({

    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorReducer
    
})

export default rootReducer;