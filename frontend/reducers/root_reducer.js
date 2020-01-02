import { combineReducers } from 'redux';
import errorReducer from './error_reducer';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({

    entities: entitiesReducer,
    errors: errorReducer,
    
})

export default rootReducer;