import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TodoApp from "./TodoApp.jsx";
import TicTacToe from "./TicTacToe.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TicTacToe></TicTacToe>
  </StrictMode>
);
