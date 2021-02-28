import React from "react";

function Task(props) {
  function handleClick() {
    //aca se dispara todo para pasarselo al abuelo
    //primero pasa por el padre TASK y luego al abuelo APP
    const { name } = props;
    props.handleCallbackNieto(name);
  }
  return (
    <>
      <li
        onClick={handleClick}
        style={props.isCompleted ? { color: "green" } : { color: "black" }}
      >
        {props.name}
      </li>
    </>
  );
}

export default Task;
