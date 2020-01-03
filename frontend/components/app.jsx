import React from 'react';
import ToDoListContainer from './todolist_container';
import GreetingContainer from './greeting_container';

const App = () => {
    return (
        <div>
            <GreetingContainer />
            <ToDoListContainer />
        </div>
    )
}

export default App;