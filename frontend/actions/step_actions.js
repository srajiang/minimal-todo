import * as StepAPIUtil from './../util/step_api_util'
import { receiveErrors } from './error_actions';

export const RECEIVE_STEPS = "RECEIVE_STEPS"
export const RECEIVE_STEP = "RECEIVE_STEP"
export const REMOVE_STEP = "REMOVE_STEP"

/* Actions */
export const receiveSteps = steps => {

    return {
        type: RECEIVE_STEPS,
        steps  
    }

}

export const receiveStep = step => {

    return {
        type: RECEIVE_STEP,
        step
    }
}

export const removeStep = step => {

    return {
        type: REMOVE_STEP,
        step
    }
}

/* Thunk action creators */
export const fetchSteps = () => dispatch => {
    return StepAPIUtil.fetchSteps()
        .then(steps => {
            dispatch(receiveSteps(steps));
        });
}

export const createStep = step => dispatch => {
    return StepAPIUtil.createStep(step)
        .then(
            step => dispatch(receiveStep(step)),
            error => dispatch(receiveErrors(error.responseJSON))
        );
}

export const deleteStep = step => dispatch => {
    return StepAPIUtil.deleteStep(step)
        .then(
            step => dispatch(removeStep(step)),
            error => console.log('Failed to delete step', error)
        )
}