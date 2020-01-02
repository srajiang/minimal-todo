import React from 'react';
import errorReducer from '../reducers/error_reducer';

export default class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            done: false,
            active: false
        };
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderDismissForm = this.renderDismissForm.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
        this.rollback = this.rollback.bind(this);

        /* refs */
        this.titleInputRef = React.createRef();
    }

    updateTitle(e) {
        this.setState({ title: e.target.value });
    }

    updateBody(e) {
        this.setState({ body: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearErrors();
        if (!this.rollback()) {  //if the entry isn't rolled back due to lack of input
            
            this.props.createTodo(this.state) //then try creating the Todo
                .then( () => { 
                    this.setState({ title: '', body: '', active: true }
                    ) }
            );

        }
    }

    toggleActive() {
        this.props.clearErrors();
        this.setState( { active: !this.state.active })
    }

    rollback() {
        if (this.state.title === '' && this.state.body === '') {
            this.toggleActive();
            return true;
        }
        return false;
    }

    renderForm() {

        let { errors } = this.props.errors;
        let titleError = "";
        let bodyError = "";
        if (errors !== undefined) {

            for (let error of errors) {
                    if(error.includes("Title")) titleError = 'Required field';
                    if(error.includes("Body")) bodyError = "Required field";
            }

        }
 
        if(this.state.active === true) {
            return (
         
                    <form onSubmit={this.handleSubmit}>
                         
                        <input className="new-item-input" type="text" style={{ flex: "1"}}
                            value={this.state.title}
                            placeholder='cool new task'
                            onChange={this.updateTitle} />
                        <div className="new-item-input-error-title">{titleError}</div>
                
                        <input className="new-item-input" type="text" style={{ flex: "1" }}
                            value={this.state.body}
                            placeholder='a description'
                            onChange={this.updateBody} />
                        <div className="new-item-input-error-body">{bodyError}</div>
                
                        <input className="new-item-submit" type="submit" value='+' />

                    </form>
    
            )
        } else {
            return (
                <div className="todo-form-inactive" onClick={this.toggleActive} >+</div>
            )
        }
    }

    renderDismissForm() {
        if (this.state.active === true) {
            return (

                <div onClick={() => this.toggleActive()} className="todo-list-item-remove">
                    <p>-</p>
                </div>

            )
        }
    }
    

    render() {
        return (
            <div>
                    { this.renderDismissForm() }
                <div className="todo-list-new-item-form">
                    { this.renderForm() }
                </div>
            </div>
        );
    }

}