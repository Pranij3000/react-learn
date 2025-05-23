import "./todoapp.scss";
import TodoForm from "../components/TodoForm.jsx";
import TodoDisplay from "../components/TodoDisplay.jsx";

import { useState } from "react";
export default function TodoApp() {
	const [todos, todosList] = useState([]);
	return (
		<>
			<section className="todoapp">
				<div className="container">
					<TodoForm todos={todos} todosList={todosList}></TodoForm>
					<TodoDisplay todos={todos} todosList={todosList}></TodoDisplay>
				</div>
			</section>
		</>
	);
}
