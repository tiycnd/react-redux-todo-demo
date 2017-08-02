import React, {Component} from 'react';
import classnames from 'classnames';

class Todo extends Component {
    render() {
        const {todo, handleToggle} = this.props;

        return (
            <div className="Todo">
                <input type="checkbox" checked={todo.done} onChange={event => handleToggle(todo.id)}/>
                <span className={classnames({'todo-done': todo.done})} onClick={event => handleToggle(todo.id)}>{todo.text}</span>
            </div>
        )
    }
}

export default Todo;
