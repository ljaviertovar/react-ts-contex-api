import { createContext, useReducer, useContext } from "react"
import TodoReducer, { INITIAL_STATE } from "./TodoReducer"
import { TodoActions, TodoState } from "../../../ts/interfaces/Todo"

type TodoCtxProps = {
	todoState: TodoState
	dispatch: React.Dispatch<TodoActions>
}

interface TodoProviderProps {
	children: JSX.Element | JSX.Element[]
}

const TodoCtx = createContext<TodoCtxProps>({} as TodoCtxProps)

const TodoProvider = ({ children }: TodoProviderProps) => {
	const [todoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE)

	const values = {
		todoState,
		dispatch,
	}

	return <TodoCtx.Provider value={values}>{children}</TodoCtx.Provider>
}

export { TodoProvider }
export default TodoCtx
