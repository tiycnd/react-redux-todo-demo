import React, {Component} from 'react';
import Todo from "./Todo";

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

export default TodoList;
