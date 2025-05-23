import "./tododisplay.scss";

export default function TodoDisplay({ todos, todosList }) {
	function handleDelete(e, todo) {
		e.preventDefault();
		todosList(
			todos.filter((items) => {
				if (items.name == todo) {
				} else {
					return items;
				}
			}),
		);
	}
	function handleComplete(todo) {
		todos.map((item) => {
			if (item.name == todo.name) {
				if (todo.done == true) {
					todo.done = false;
				} else {
					todo.done = true;
				}
			}
			console.log(item);
		});
	}

	return (
		<>
			<div className="todos-wrapper d-flex flex-column align-items-center">
				{todos.map((todo, index) => (
					<div key={index} className="todo d-flex justify-content-between align-items-center">
						<p onClick={() => handleComplete(todo)}>{todo.name}</p>
						<button onClick={(e) => handleDelete(e, todo.name)}>delete</button>
					</div>
				))}
			</div>
		</>
	);
}
