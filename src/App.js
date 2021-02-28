import React, { useState } from "react";
import AddTasks from "./components/AddTasks/index.js";
import Tasks from "./components/Tasks/index.js";
/*
Creando una estructura un poco más compleja
array de objetos para que sea escalable a futuro
la idea actual es poder filtrar el contenido del TO-DO List
*/
function App() {
  const [tasks, setTasks] = useState([]);

  function handleInputValue(value) {
    setTasks([
      ...tasks,
      {
        value,
        isCompleted: false,
      },
    ]);
  }
  function handleCallbackAbuelo(name) {
    //sirve para probar si hicimos bien el enganche :3
    console.log("abuelo", name);
    //actualiza el estado si esta o no completa la tarea
    const modifiedTasks = tasks.map((task) => {
      //si es igual el array con el nombre, se hace el cambio
      if (task.value == name) {
        return {
          //value es necesario poner, porque se crea un nuevo array
          //cvuando matchee el if, si no estuviese value, crearia un nuevo value
          value: task.value,
          isCompleted: !task.isCompleted,
        };
      }
      //si no es igual, retorno por donde vino
      //si no lo ponemos, explota todo
      //porque no sabe que hacer si no matchea
      return task;
    });
    setTasks(modifiedTasks);
  }
  return (
    <>
      <AddTasks handleCallback={handleInputValue} />
      <Tasks handleCallbackPadre={handleCallbackAbuelo} tasks={tasks} />
    </>
  );
}

export default App;
