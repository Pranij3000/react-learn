import "./todoapp.scss";
import TodoForm from "../components/TodoForm.jsx";
import TodoDisplay from "../components/TodoDisplay.jsx";
import Counter from "../components/Counter.jsx";

import { useState } from "react";
export default function TodoApp() {
  const [todos, todosList] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;

  return (
    <>
      <section className="todoapp">
        <div className="container">
          <TodoForm todos={todos} todosList={todosList}></TodoForm>
          <TodoDisplay todos={todos} todosList={todosList}></TodoDisplay>
          <Counter completedTodos={completedTodos} todos={todos}></Counter>
        </div>
      </section>
    </>
  );
}
