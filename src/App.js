import React, { useState } from "react";
import AddTasks from "./components/AddTasks/index.js";
import Tasks from "./components/Tasks/index.js";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleCallback(inputValue) {
    setTasks((tasks) => [...tasks, inputValue]);
  }
  return (
    <>
      <AddTasks handleCallback={(inputValue) => handleCallback(inputValue)} />
      <Tasks tasks={tasks} />
    </>
  );
}

export default App;
