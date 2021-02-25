import React, { useState } from "react";

function AddTasks(props) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function addTask(e) {
    if (inputValue && props.handleCallback) {
      props.handleCallback(inputValue);
      setInputValue("");
    }
  }

  function handleKeyPress(e) {
    if (e.keyCode == 13) {
      addTask();
    }
  }
  return (
    <>
      <input
        onKeyDown={handleKeyPress}
        type="text"
        onChange={handleChange}
        value={inputValue}
      />
      <button onClick={addTask}>Agregar</button>
    </>
  );
}

export default AddTasks;
