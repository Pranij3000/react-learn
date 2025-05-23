import "./todoapp.scss";
import TodoForm from "../components/TodoForm.jsx";

import { useState } from "react";
export default function TodoApp() {
	const [todos, todosList] = useState([]);
	return (
		<>
			<section className="todoapp">
				<div className="container">
					<TodoForm></TodoForm>
				</div>
			</section>
		</>
	);
}
