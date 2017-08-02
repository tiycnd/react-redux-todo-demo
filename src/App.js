import React, {Component} from 'react';
import 'shoelace-css/dist/shoelace.css';
import './App.css';

import CreateTodo from "./containers/CreateTodo";
import FilterTodos from "./containers/FilterTodos";
import TodoList from "./containers/TodoList";

class App extends Component {
    render() {
        return (
            <div className="App">
                <CreateTodo/>
                <FilterTodos/>
                <TodoList/>
            </div>
        );
    }
}

export default App;
