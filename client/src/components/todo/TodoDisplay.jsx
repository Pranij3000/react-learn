import "./tododisplay.scss";

export default function TodoDisplay({ todos, todosList }) {
  function handleDelete(e, todo) {
    e.preventDefault();
    todosList(
      todos.filter((items) => {
        if (items.name == todo.name) {
        } else {
          return items;
        }
      })
    );
  }
  function handleComplete(todo) {
    const updatedTodos = todos.map((item) => {
      if (item.name === todo.name) {
        return { ...item, done: !item.done };
      } else {
        return item;
      }
    });
    todosList(updatedTodos);
  }

  return (
    <>
      <div className="todos-wrapper d-flex flex-column align-items-center">
        {todos.map((todo, index) => (
          <div key={index} className={`todo d-flex justify-content-between align-items-center ${todo.done ? "completed" : ""}`}>
            <p onClick={() => handleComplete(todo)}>{todo.name}</p>
            <button onClick={(e) => handleDelete(e, todo)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
