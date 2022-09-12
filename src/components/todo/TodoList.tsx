import { Todo } from "../../ts/interfaces/Todo"
import { useContext } from "react"
import TodoCtx from "./context/TodoCtx"
import TodoItem from "./TodoItem"

const TodoList = () => {
	const { todoState } = useContext(TodoCtx)
	const { todos } = todoState

	return (
		<ul>
			{todos.map((todo: Todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	)
}

export default TodoList
