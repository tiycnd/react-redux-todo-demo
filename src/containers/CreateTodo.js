import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createTodo} from "../actions";

class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    updateText = (event) => {
        this.setState({text: event.target.value});
    }

    createTodo = (event) => {
        event.preventDefault();
        this.props.createTodo(this.state.text);
        this.setState({text: ""});
    }

    render() {
        return (
            <div className="CreateTodo">
                <form onSubmit={this.createTodo}>
                    <input type="text" placeholder="Create a new todo" value={this.state.text} onChange={this.updateText}/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {}
}

const mapDispatchToProps = function(dispatch) {
    return {
        createTodo: function(text) {
            return dispatch(createTodo(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
