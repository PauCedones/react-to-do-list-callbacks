import React, { useState } from "react";

function AddTasks(props) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleClick() {
    if (inputValue != "") {
      props.handleCallback(inputValue);
      setInputValue("");
    }
  }
  return (
    <>
      <input type="text" onChange={handleChange} value={inputValue} />
      <button onClick={handleClick}>Agregar</button>
    </>
  );
}

export default AddTasks;
