
export const allTodos = (state) => {
    let todoKeyArray = Object.keys(state.entities.todos);
    return todoKeyArray.map((keyId) => state.entities.todos[keyId]);
}

export const stepsByTodoId = (state, todoId) => {
    

    let stepsKeyArray = Object.keys(state.entities.steps);
    let stepsById = [];

    for (let key of stepsKeyArray) {

        if (state.entities.steps[key].todo_id === todoId) {
           stepsById.push(state.entities.steps[key]);
        }

    }

    return stepsById;

}

export const allErrors = state => {
    return state.errors;
}