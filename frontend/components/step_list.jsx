import StepListItemContainer from './step_list_item_container';
import StepForm from './stepform'
import React from 'react'

class StepList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let { receiveStep, createStep, deleteStep } = this.props;

            return (
                <div>
                    <div className="step-list">
                        {
                            this.props.steps.map((step) => {
                                return (
                                    <StepListItemContainer key={step.id} step={step} deleteStep={deleteStep}/> 
                                )
                            }
                            )
                        }
                    </div>
                    <StepForm receiveStep={receiveStep} createStep={createStep} todo_id={this.props.todo_id}/>
                </div>
            )

        }
}

export default StepList;