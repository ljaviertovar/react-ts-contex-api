import { TodoProvider } from "./context/TodoCtx"
import TodoList from "./TodoList"

const Todo = () => {
	return (
		<TodoProvider>
			<h1>Todo:</h1>
			<TodoList />
		</TodoProvider>
	)
}

export default Todo
