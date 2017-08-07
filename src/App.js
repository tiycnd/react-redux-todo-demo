import React, {Component} from 'react';
import 'shoelace-css/dist/shoelace.css';
import './App.css';

import CreateTodo from "./containers/CreateTodo";
import FilterTodos from "./containers/FilterTodos";
import TodoList from "./containers/TodoList";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducer'

const store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <CreateTodo/>
                    <FilterTodos/>
                    <TodoList/>
                </div>
            </Provider>
        );
    }
}

export default App;
