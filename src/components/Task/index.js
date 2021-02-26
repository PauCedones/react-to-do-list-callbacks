import React, { useState } from "react";

function Task(props) {
  /*const { task } = props;
  const [complete, setComplete] = useState("red");

  function handleToggle() {
    if (complete == "red") {
      setComplete("green");
    }
  }
  */
  const [status, setStatus] = useState(true);

  function handleToggle() {
    setStatus((prevState) => !prevState);
  }
  return (
    <>
      <li
        style={status ? { color: "black" } : { color: "green" }}
        onClick={handleToggle}
      >
        {props.name}
      </li>
    </>
  );
}

export default Task;
