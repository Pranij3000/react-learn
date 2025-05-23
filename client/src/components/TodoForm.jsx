import { useState } from "react";
import "./todoform.scss";

export default function TodoForm({ todosList, todos }) {
	const [todo, setTodo] = useState({ name: "", done: false });
	function handleSubmit(e) {
		e.preventDefault();
		todosList([...todos, todo]);
		setTodo({ name: "", done: false });
	}

	return (
		<>
			<div className="todoapp-form" onSubmit={(e) => handleSubmit(e)}>
				<form>
					<div className="input-field-wrapper d-flex justify-content-center">
						<div className="input-wrapper d-flex align-items-center">
							<textarea value={todo.name} onChange={(e) => setTodo({ name: e.target.value, done: false })}></textarea>
							<button type="submit">Submit</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
