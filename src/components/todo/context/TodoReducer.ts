import { Todo, TodoActions, TodoState } from "../../../ts/interfaces/Todo"

const INITIAL_STATE: TodoState = {
	todoCount: 2,
	todos: [
		{
			id: "1",
			desc: "Develop todo",
			completed: true,
		},
		{
			id: "2",
			desc: "Develop todo Marketplace",
			completed: false,
		},
	],
	completed: 1,
	pending: 1,
}

const TodoReducer = (state: TodoState, action: TodoActions) => {
	switch (action.type) {
		case "addTodo":
			return {
				...state,
				todos: [...state.todos, action.payload],
			}

		case "completeTodo":
			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id === action.payload.id) {
						return { ...todo, completed: !todo.completed }
					}

					return todo
				}),
			}

		default:
			return state
	}
}

export { INITIAL_STATE }
export default TodoReducer
