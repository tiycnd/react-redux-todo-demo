import {connect} from 'react-redux'

import TodoList from "../components/TodoList";
import {toggleTodo} from "../actions";

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
