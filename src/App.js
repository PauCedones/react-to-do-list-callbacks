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
  return (
    <>
      <AddTasks handleCallback={handleInputValue} />
      <Tasks tasks={tasks} />
    </>
  );
}

export default App;
