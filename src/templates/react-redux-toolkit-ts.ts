// From: https://redux.js.org/introduction/why-rtk-is-redux-today
// From: https://redux-toolkit.js.org/usage/usage-with-typescript/
export default
`import { createSlice } from '@reduxjs/toolkit'

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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

<Provider store={store}>
  // Your app
</Provider>

 */

`;