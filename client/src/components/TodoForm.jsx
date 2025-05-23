import { useState } from "react";
import "./todoform.scss";

export default function TodoForm() {
	const [todo, setTodo] = useState("");
	return (
		<>
			<div className="todoapp-form">
				<form>
					<div className="input-field-wrapper d-flex justify-content-center">
						<div className="input-wrapper d-flex align-items-center">
							<textarea value={todo} onChange={(e) => setTodo(e.target.value)}></textarea>
							<button>Submit</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
