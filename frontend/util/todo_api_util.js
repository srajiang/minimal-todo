export const fetchTodos = () => {
    return (

        $.ajax({
            method: 'GET',
            url: '/api/todos'
        })

    )
}

export const createTodo = (todo) => {

    return (
        
        $.ajax({
            method: 'POST',
            url: '/api/todos',
            data: {
                todo: todo
            }
        })
    )
    
}

export const deleteTodo = todo => {

    return (

        $.ajax({
            method: 'DELETE',
            url: `/api/todos/${todo.id}`,
            dataType: 'json'
        })
    )

}