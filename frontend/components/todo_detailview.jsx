import React from 'react'
import StepListContainer from './step_list_container';

export default class TodoDetailView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let { body, todo } = this.props;
        
        return (

            <div className="todo-detail">
                <div className="todo-detail-text"><i>{body}</i>
                    <StepListContainer todo={todo} />
                </div>

            </div>

        )

    }

}

