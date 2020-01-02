import { combineReducers } from 'redux';
import usersReducer from './user_reducer';
import stepsReducer from './steps_reducer';
import errorReducer from './error_reducer';
import todosReducer from './todos_reducer';


const entitiesReducer = combineReducers({

    users: usersReducer, 
    steps: stepsReducer,
    todos: todosReducer

})

export default entitiesReducer;
