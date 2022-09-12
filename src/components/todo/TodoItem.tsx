import { Todo } from "../../ts/interfaces/Todo"
import { useContext } from "react"
import TodoCtx from "./context/TodoCtx"

interface Props {
	todo: Todo
}

const TodoItem = ({ todo }: Props) => {
	const { dispatch } = useContext(TodoCtx)

	const toggleTodo = (id: string) => {
		dispatch({ type: "completeTodo", payload: { id } })
	}

	const handleDoubleClick = () => {
		toggleTodo(todo.id)
	}

	return (
		<li
			onDoubleClick={handleDoubleClick}
			style={{
				cursor: "pointer",
				textDecoration: todo.completed ? "line-through" : "",
			}}
		>
			{todo.desc}
		</li>
	)
}

export default TodoItem
