"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    }
  }
})

export const { todoAdded, todoToggled } = todosSlice.actions
export default todosSlice.reducer

/**
 * Store config & provider

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/todosSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer
  }
});

<Provider store={store}>
  // Your app
</Provider>

 */

`;
