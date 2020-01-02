import { receiveStep, deleteStep } from "../actions/step_actions"
import { connect } from "react-redux"
import StepListItem from './step_list_item'

const MapDispatchToProps = dispatch => ({

    removeStep: step => dispatch(deleteStep(step)),
    receiveStep: step => dispatch(receiveStep(step))

})

export default connect(null, MapDispatchToProps)(StepListItem)