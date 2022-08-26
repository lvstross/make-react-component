// From: https://redux.js.org/introduction/why-rtk-is-redux-today
export default `
const ADD_TODO = 'ADD_TODO'
const TODO_TOGGLED = 'TODO_TOGGLED'

export const addTodo = text => ({
  type: ADD_TODO,
  payload: { text, id: nanoid() }
})

export const todoToggled = id => ({
  type: TODO_TOGGLED,
  payload: id
})

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    case TODO_TOGGLED:
      return state.map(todo => {
        if (todo.id !== action.payload.id) return todo

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    default:
      return state
  }
}

/**
 * Store config, rootReducer & provider

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { todosReducer } from './todo.reducer';

const rootReducer = combineReducers({
  todosReducer,
  // other reducers
});

const store = createStore(rootReducer);

<Provider store={store}>
  // Your app
</Provider>

 */
`;