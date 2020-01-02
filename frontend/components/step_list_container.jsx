import { connect } from 'react-redux';
import StepList from './step_list';
import { stepsByTodoId } from './../reducers/selectors';
import { receiveStep, createStep, deleteStep } from './../actions/step_actions';

const mapStateToProps = (state, {todo}) => {

    return {
        steps: stepsByTodoId(state, todo.id),
        todo_id: todo.id, 
    }
}


const mapDispatchToProps = dispatch => ({

    receiveStep: step => dispatch(receiveStep(step)),
    createStep: step => dispatch(createStep(step)),
    deleteStep: step => dispatch(deleteStep(step))
})

export default connect(mapStateToProps, mapDispatchToProps)(StepList);