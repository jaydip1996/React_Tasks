import React from "react";
import "./Style/Style.css";
import { NewTask } from "./Task/NewTask";
import { TasksList } from "./Task/TaskList";

export const App = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <h1>ToDoDaily</h1>
        </div>
        <NewTask />
      </div>
      <TasksList />
    </div>
  );
};