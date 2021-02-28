import React from "react";
import Task from "../Task";

function Tasks(props) {
  function handleCallbackPadre(name) {
    //sirve para probar si hicimos bien el enganche
    console.log("padre", name);
    //aca se ejecuta el callback del hijo,
    //el parametro es lo que queremos pasar al abuelo
    //por eso todo este quilombo jajaja
    props.handleCallbackPadre(name);
  }
  return (
    <>
      <ul>
        {props.tasks.map((task, key) => {
          return (
            <Task
              handleCallbackNieto={handleCallbackPadre}
              name={task.value}
              isCompleted={task.isCompleted}
              key={key}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Tasks;
