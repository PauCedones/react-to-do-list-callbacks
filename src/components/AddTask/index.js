import React from "react";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    //inicializacion del estado
    this.state = {
      inputValue: "",
    };
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      inputValue: value,
    });
  }
  handleClick() {
    const { inputValue } = this.state;
    if (inputValue != "") {
    }
  }
  render() {
    return (
      <>
        <input type="text" />
        <button>Agregar</button>
      </>
    );
  }
}

export default AddTask;
