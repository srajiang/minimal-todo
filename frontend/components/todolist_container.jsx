import { connect } from 'react-redux';
import ToDoList from './todolist';
import {  receiveToDo, fetchTodos, createTodo, deleteTodo } from './../actions/todo_actions';
import { allTodos, allErrors } from './../reducers/selectors'
import { clearErrors } from '../actions/error_actions';
import { fetchSteps } from './../actions/step_actions'

const mapStateToProps = state => ({
    todos: allTodos(state),
    errors: allErrors(state)
}); 

const mapDispatchToProps = dispatch => ({

    createTodo: todo => dispatch(createTodo(todo)),
    receiveToDo: todo => dispatch(receiveToDo(todo)),
    fetchTodos: () => dispatch(fetchTodos()), 
    removeTodo: todo => dispatch(deleteTodo(todo)),
    clearErrors: () => dispatch(clearErrors()),
    fetchSteps: () => dispatch(fetchSteps())

}); 

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
