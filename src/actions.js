export const CREATE_TODO = 'CREATE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FILTER_TODOS = 'FILTER_TODOS';

// export const createTodo = function (text) {
//   return {
//     type: CREATE_TODO,
//     payload: text
//   }
// }
//
// export const toggleTodo = function (id) {
//   return {
//     type: TOGGLE_TODO,
//     payload: id
//   }
// }
//
// export const filterTodos = function (filterType) {
//   return {
//     type: FILTER_TODOS,
//     payload: filterType
//   }
// }

const makeActionCreator = function (actionType) {
  return function (payload) {
    return {
      type: actionType,
      payload: payload
    }
  }
}

export const createTodo = makeActionCreator(CREATE_TODO);
export const toggleTodo = makeActionCreator(TOGGLE_TODO);
export const filterTodos = makeActionCreator(FILTER_TODOS);
