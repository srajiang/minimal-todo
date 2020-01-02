import React from 'react';
import ToDoListItem from './todolist_item';
import ToDoForm from './todo_form';

class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.props.fetchTodos();  //gets the todos from the db
        this.props.fetchSteps();  //gets the steps from the db
    }

    render() {

        let { todos, receiveToDo, createTodo, removeTodo, errors, clearErrors } = this.props;

        return (
            <div className="todo-list-main">

                <h1 id="task-list-header">🧗‍♀️ To Do</h1>

                <ul className="todo-list-container">
                    {
                        todos.map((todo) =>
                            <ToDoListItem key={todo.id} todo={todo} removeTodo={removeTodo}/>

                        )
                    }
                </ul>
                <div className="todo-list-new-item-form-container">
                    <ToDoForm receiveToDo={receiveToDo} createTodo={createTodo} errors={errors} clearErrors={clearErrors} />
                </div>
            </div>
        )

    }

    

};

export default ToDoList;