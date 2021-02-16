import React, { useState } from "react";

function Task(props) {
  const { task } = props;
  const [complete, setComplete] = useState("red");

  function handleClick() {
    if (complete == "red") {
      setComplete("green");
    }
  }
  return (
    <>
      <li onClick={handleClick} style={{ color: `${complete}` }}>
        {task}
      </li>
    </>
  );
}

export default Task;
