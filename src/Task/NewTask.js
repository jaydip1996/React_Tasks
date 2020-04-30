import React from "react";
import { connect } from "react-redux";
import { actions } from "./actions";

const NewTaskComponent = ({ addTask }) => {
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      addTask(e.target.value);
      e.target.value = "";
      e.preventDefault();
    }
  }
  return <div> <input type = 'text' placeholder = 'Add a new task ...' onKeyPress = {handleKeyPress} /> </div>
};

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask : (title) => dispatch(actions.addTask(title))
    }
}

export const NewTask = connect(mapStateToProps, mapDispatchToProps)(NewTaskComponent);