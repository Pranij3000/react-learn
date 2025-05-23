import "./tododisplay.scss";

export default function TodoDisplay({ todos }) {
	return (
		<>
			<div className="todos-wrapper d-flex flex-column align-items-center">
				{todos.map((todo) => (
					<div className="todo d-flex justify-content-between align-items-center">
						<p>{todo}</p>
						<button>delete</button>
					</div>
				))}
			</div>
		</>
	);
}
