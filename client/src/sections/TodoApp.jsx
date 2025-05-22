import "./todoapp.scss";
import { useState } from "react";
export default function TodoApp() {
  const [todo, setTodo] = useState("");
  return (
    <>
      <section className="todoapp">
        <div className="container">
          <div className="todoapp-form">
            <form>
              <div className="input-field-wrapper d-flex align-items-center justify-content-center">
                <textarea value={todo}></textarea>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
