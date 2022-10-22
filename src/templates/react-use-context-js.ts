export default
`import { createContext, useContext, useReducer, ReactNode } from 'react';

const initialState = {
    tasks: [],
    task: {}
}

export const TASKS_CHANGE = 'TASKS_CHANGE'
export const TASK_CHANGE = 'TASK_CHANGE'

function tasksReducer(state, action) {
    switch (action.type) {
        case TASKS_CHANGE: {
            return {
                ...state,
                tasks: action.payload.tasks
            }
        }
        case TASK_CHANGE: {
            return {
                ...state,
                task: action.payload.task
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const TaskContext = createContext(initialState);
const TaskDispatchContext = createContext(null);

export function TaskProvider({ children }) {
    const [state, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <TaskContext.Provider value={state}>
        <TaskDispatchContext.Provider value={dispatch}>
            {children}
        </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTasks() {
    return useContext(TaskContext)
}

export function useTasksDispatch() {
    return useContext(TaskDispatchContext)
}
`