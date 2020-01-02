import React from 'react'

class StepListItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            step: this.props.step,
        }
        this.updateStep = this.updateStep.bind(this);
    }

    updateStep(e) {
        this.state.step.done = !this.state.step.done;
        this.setState({ step: this.state.step });
    }


    render() {

        let { step } = this.state;
        let doneText = (step.done === false) ? 'Done' : doneText = 'Undo';

        return (
            <div className="step-list-item">
                <div onClick={() => {this.props.removeStep(step)}} className="step-list-item-remove">
                    -
                </div>
                <div className="step-list-item-title">{this.props.step.title}</div>
                <button className="step-list-item-done" onClick={this.updateStep}>{doneText}</button>
            </div>
        )
    }
}

export default StepListItem