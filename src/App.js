import React, { useState } from "react";
import AddTasks from "./components/AddTasks/index.js";
import Tasks from "./components/Tasks/index.js";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleInputValue(inputValue) {
    console.log(inputValue);
    setTasks([...tasks, inputValue]);
  }
  return (
    <>
      <AddTasks handleCallback={handleInputValue} />
      <Tasks tasks={tasks} />
    </>
  );
}

export default App;
