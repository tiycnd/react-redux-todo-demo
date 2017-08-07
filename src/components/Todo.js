import React, {Component} from 'react';

class Todo extends Component {
    render() {
        const {todo, handleToggle} = this.props;

        return (
            <div className="Todo">
                <input type="checkbox" checked={todo.done} onChange={event => handleToggle(todo.id)}/>
                <span className={todo.done ? "todo-done" : "todo-not-done"} onClick={event => handleToggle(todo.id)}>{todo.text}</span>
            </div>
        )
    }
}

export default Todo;
