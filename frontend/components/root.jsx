import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

//use destructure syntax to not have to use props.store
const Root = ({store}) => (


        <Provider store={store}>
            <div>
                <App />
            </div>    
        </Provider>

)

export default Root;