import { useState } from "react";
import "./todoform.scss";

export default function TodoForm({ todosList, todos }) {
	const [todo, setTodo] = useState("");
	function handleSubmit(e) {
		e.preventDefault();
		todosList([...todos, todo]);
		setTodo("");
	}

	return (
		<>
			<div className="todoapp-form" onSubmit={(e) => handleSubmit(e)}>
				<form>
					<div className="input-field-wrapper d-flex justify-content-center">
						<div className="input-wrapper d-flex align-items-center">
							<textarea value={todo} onChange={(e) => setTodo(e.target.value)}></textarea>
							<button type="submit">Submit</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
