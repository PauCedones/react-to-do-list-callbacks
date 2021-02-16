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
    //actualizo el estado
    this.setState({
      inputValue: value,
    });
  }
  handleClick() {
    const { inputValue } = this.state;
    if (inputValue != "") {
      this.props.propDePrueba(inputValue);
    }
  }
  render() {
    return (
      <>
        <input type="text" onChange={(e) => this.handleChange(e)} />
        <button onClick={() => this.handleClick()}>Agregar</button>
      </>
    );
  }
}

export default AddTask;
