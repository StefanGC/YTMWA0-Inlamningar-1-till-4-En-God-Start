import React from "react";

 export function Input(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        value={props.value}
        onChange={props.handleTaskChange}
        type="text"
        className="new-task"
      />
    </form>
  );
}