import React, {Component} from 'react';
import {connect} from 'react-redux'

import {toggleTodo} from "../actions";
import Todo from "../components/Todo";

class TodoList extends Component {
    handleToggle = (id) => {
        this.props.toggleTodo(id);
    }

    render() {
        const {todos} = this.props;
        return (
            <div className="TodoList">
                {todos.map(todo => (<Todo handleToggle={this.handleToggle} todo={todo}/>))}
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    let todos;
    if (state.filter === 'uncompleted') {
        todos = state.todos.filter(todo => !todo.done);
    } else if (state.filter === 'completed') {
        todos = state.todos.filter(todo => todo.done);
    } else {
        todos = state.todos;
    }

    return {todos: todos}
}

const mapDispatchToProps = function(dispatch) {
    return {
        toggleTodo: function(id) {
            dispatch(toggleTodo(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
