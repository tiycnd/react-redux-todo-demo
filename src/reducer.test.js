import reducer from "./reducer";
import { createTodo } from "./actions";

describe("CREATE_TODO", function () {
    test("creates a new todo", function () {
        const initialState = {todos: [], nextId: 1}
        const state = reducer(initialState, createTodo("Test"));
        expect(state.todos).toHaveLength(1);
        expect(state.todos[0]).toEqual({id: 1, done: false, text: "Test"});
    })

    test("updates nextId", function () {
        const initialState = {todos: [], nextId: 1}
        const state = reducer(initialState, createTodo("Test"));
        expect(state.nextId).toEqual(2);
    })
})
        
