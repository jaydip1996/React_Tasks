import React from "react";
import { connect } from "react-redux";
import { Task } from "./Task";
import { actions } from "./actions";

const TaskListComponent = ({ tasks, completeTask }) => {
  return (
    <div class="tasklist-container">
      <ul>
          {tasks.map(task => 
            <li key = {task.id}>
                <Task task = {task} completeTask = {completeTask} />
            </li>
            )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        tasks : state.tasks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        completeTask : (id) => dispatch(actions.completeTask(id))
    }
}

export const TasksList = connect (mapStateToProps, mapDispatchToProps)(TaskListComponent)