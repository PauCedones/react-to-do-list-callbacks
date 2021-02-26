import React, { useState } from "react";

function Task(props) {
  return (
    <>
      <li
        onClick={handleIsCompleted}
        style={props.isCompleted ? { color: "green" } : { color: "black" }}
      >
        {props.name}
      </li>
    </>
  );
}

export default Task;
