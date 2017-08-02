import React, {Component} from 'react';
import 'shoelace-css/dist/shoelace.css';
import './App.css';

import CreateTodo from "./containers/CreateTodo";
import FilterTodos from "./containers/FilterTodos";
import FilteredTodoList from "./containers/FilteredTodoList";

class App extends Component {
    render() {
        return (
            <div className="App">
                <CreateTodo/>
                <FilterTodos/>
                <FilteredTodoList/>
            </div>
        );
    }
}

export default App;
