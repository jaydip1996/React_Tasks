import React from "react";

export const Task = ({ task, completeTask }) => {
  return <div className = {`${task.completed ? 'completed ' : ''}`} onClick={(e) => completeTask(task.id)}>{task.title}</div>;
};