export default
`import { createContext, useContext, useReducer, ReactNode } from 'react';

interface Task {
    title: string
    description: string
    complete: boolean
}

interface TasksActionPayload {
    tasks: Task[]
}

interface TasksAction {
    type: string
    payload: TasksActionPayload
}

interface TaskActionPayload {
    task: Task
}

interface TaskAction {
    type: string
    payload: TaskActionPayload
}

interface TasksInitialState {
    tasks: Task[]
    task: Task
}

type RootAction = TaskAction | TasksAction

const initialState = {
    tasks: [],
    task: {}
}

export const TASKS_CHANGE = 'TASKS_CHANGE'
export const TASK_CHANGE = 'TASK_CHANGE'

function tasksReducer(state: TasksInitialState, action: RootAction) {
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

const TaskContext = createContext<TasksInitialState>(initialState);
const TaskDispatchContext = createContext<React.Dispatch<RootAction>>(null);

interface TaskProviderProps {
    children: ReactNode
}

export function TaskProvider({ children }: TaskProviderProps) {
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