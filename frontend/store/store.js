import { createStore, applyMiddleware } from 'redux';
import { thunk } from './../middleware/thunk';
import rootReducer from './../reducers/root_reducer';

const configStore = (preloadedState = {}) => {

    return createStore(
        rootReducer, 
        preloadedState,
        applyMiddleware(thunk));
}

export default configStore;