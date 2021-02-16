import React from "react";
import Task from "./Task/index";

function Tasks(props) {
  const { tasks } = props;
  return (
    <>
      <ul>
        {tasks.map((task, key) => {
          return <Task task={task} key={key} />;
        })}
      </ul>
    </>
  );
}

export default Tasks;
