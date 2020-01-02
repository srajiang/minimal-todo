export const fetchSteps = () => {

    return (

        $.ajax({
            method: 'GET',
            url: '/api/steps'
        })
    )
}

export const createStep = step => {

    return (

        $.ajax({
            method: 'POST',
            url: '/api/steps',
            data: {
                step: step
            }
        })
    )
}

export const deleteStep = step => {

    return (

        $.ajax({
            method: 'DELETE',
            url: `/api/steps/${step.id}`,
            dataType: 'json'
        })

    )

}