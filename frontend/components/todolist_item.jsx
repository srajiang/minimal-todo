import React from 'react'
import TodoDetailViewContainer  from "./todo_detailview_container";

class ToDoListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo,
            detail: false
        }

        this.updateTodo = this.updateTodo.bind(this);
        this.todoDetailView = this.todoDetailView.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    updateTodo(e) {
        this.state.todo.done = !this.state.todo.done;
        this.setState({ todo: this.state.todo });
    }

    todoDetailView(todo) {
        if (this.state.detail === true) {

            return (
                <div className="todo-detail-view">
                    <TodoDetailViewContainer body={todo.body} todo={todo} />
                </div>
            )
        } else {

            return;
        }
    }

    handleClick() {
        if (this.state.detail === false ) {
            this.setState({ detail: true });
        } else {
            this.setState( { detail: false});
        }
        
    }

    render() {

        let { todo } = this.state //destructer property allows you to "get the todo value from the state"
        let doneText = (todo.done === false) ? <div className="done-arrow">&#10095;</div> : doneText = <div className="done-arrow check">&#10004;</div>

        return (
        <div>
            <div onClick={this.handleClick} className="todo-list-item-container">
                <div onClick={()=> this.props.removeTodo(todo)} className="todo-list-item-remove">
                    <p>-</p>
                </div>
                <div>{todo.title}</div>
                    <span className="complete-task" onClick={this.updateTodo}>{doneText}</span>
            </div>
            {this.todoDetailView(todo)}
        </div>
        )

    }

}

export default ToDoListItem;