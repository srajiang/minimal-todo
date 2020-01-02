import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const store = configStore();
    window.store = store; //need to comment this out
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
})