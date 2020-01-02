import * as TodoAPIUtil from './../util/todo_api_util'
import { receiveErrors } from './error_actions';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveToDos = todos => ({
    type: RECEIVE_TODOS,
    todos
})

export const receiveToDo = todo => {
    return {
        type: RECEIVE_TODO,
        todo
    }
};

export const removeTodo = todo => {
    return {
        type: REMOVE_TODO,
        todo
    }
}

export const fetchTodos = () => dispatch => {
    return TodoAPIUtil.fetchTodos()
        .then(todos => dispatch(receiveToDos(todos)));
}

export const createTodo = todo => dispatch => {
    return TodoAPIUtil.createTodo(todo)
        .then(
            todo => dispatch(receiveToDo(todo)), 
            error => dispatch(receiveErrors(error.responseJSON))
        );
}

export const deleteTodo = todo => dispatch => {
    return TodoAPIUtil.deleteTodo(todo)
        .then(
            todo => dispatch(removeTodo(todo)),
            error => console.log('Failed to delete todo', error)
        )

}


