import "./counter.scss";
export default function Counter({ completedTodos, todos }) {
  return (
    <>
      <div className="counter-container">
        <div className="container">
          <div className="counter-wrapper d-flex justify-content-between align-items-center">
            <h2>Completed: {completedTodos}</h2>
            <h2>Total: {todos.length}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
