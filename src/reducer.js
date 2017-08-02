import update from 'immutability-helper';
import {CREATE_TODO, TOGGLE_TODO, FILTER_TODOS} from "./actions";

const initialState = {
    nextId: 1,
    todos: [],
    filter: 'all'
}

const reducer = function(state = initialState, action) {
    switch (action.type) {
        case CREATE_TODO:
            return update(state, {
                todos: {
                    $push: [
                        {
                            text: action.payload,
                            id: state.nextId,
                            done: false
                        }
                    ]
                },
                nextId: {
                    $apply: (id) => id + 1
                }
            })
        case TOGGLE_TODO:
            const idx = state.todos.findIndex((todo) => todo.id === action.payload);
            return update(state, {
                todos: {
                    [idx]: {
                        done: {
                            $apply: (done) => !done
                        }
                    }
                }
            })
        case FILTER_TODOS:
            return update(state, {
                filter: {
                    $set: action.payload
                }
            })
        default:
            return state;
    }
}

export default reducer;
