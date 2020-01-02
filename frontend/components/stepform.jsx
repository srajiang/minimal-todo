import React from 'react'

class StepForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            done: false,
            todo_id: this.props.todo_id,
            active: false
        }

        this.updateTitle = this.updateTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
        this.rollback = this.rollback.bind(this);
    }

    updateTitle(e) {
        this.setState({ title: e.target.value });
    }

    toggleActive() {
        this.setState({ active: !this.state.active })
    }

    rollback() {
        if (this.state.title === '') {
            this.toggleActive()
            return true;
        }
        return false;
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.rollback()) {

            this.props.createStep(this.state)
                .then( 
                    this.setState({ title: '', done: false })
                    );
                    
        }
    }

    render() {

        if (this.state.active === false) {

            return (
                <div className="step-list-item">
                    <div className="step-form-inactive" onClick={this.toggleActive} >
                    +
                    </div>
                </div>
            )
            
        } else {

            return (
            <div>
                    <form className="step-form" action="">
                        <div onClick={() =>  this.toggleActive() } className="step-list-item-remove step-form-dismiss">
                            -
                        </div>
                        <input 
                            className="new-step-input"
                            onChange={this.updateTitle} 
                            value={this.state.title}
                            type="text"
                            placeholder="add a step here"
                        />
                        <input 
                            className = "new-step-submit"
                            onClick={this.handleSubmit}
                            type="submit"
                            value='+'
                        />
                    </form>
            </div>
            )
        }
    }

}

export default StepForm