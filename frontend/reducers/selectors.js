
export const allTodos = (state) => {

    let todoKeyArray = Object.keys(state.todos);
    return todoKeyArray.map((keyId) => state.todos[keyId]);

}

export const stepsByTodoId = (state, todoId) => {
    

    let stepsKeyArray = Object.keys(state.steps);
    let stepsById = [];

    for (let key of stepsKeyArray) {

        if (state.steps[key].todo_id === todoId) {
           stepsById.push(state.steps[key]);
        }

    }

    return stepsById;

}

export const allErrors = state => {
    return state.errors;
}