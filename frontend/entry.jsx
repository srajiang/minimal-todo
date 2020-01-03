import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/store';
import Root from './components/root';

//temp, to remove
import {
    login,
    logout,
    signup
} from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
    const store = configStore();

    // temp for testing, need to remove
    window.store = store;
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    //testing end

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
})