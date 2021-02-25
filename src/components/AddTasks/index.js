import React, { useState } from "react";

function AddTasks(props) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleClick() {
    if (inputValue && props.handleCallback) {
      props.handleCallback(inputValue);
      setInputValue("");
    }
  }
  function handleKeyPress(e) {
    if (e.keyCode == 13) {
      props.handleCallback(inputValue);
      setInputValue("");
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
      <button onClick={handleClick}>Agregar</button>
    </>
  );
}

export default AddTasks;
