import React from "react";
import Tasks from "./components/Tasks/index";
import AddTask from "./components/AddTask/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }
  handleCallback(inputValue) {
    const { tasks } = this.state;
    this.setState({
      tasks: [...tasks, inputValue],
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <>
        <AddTask
          propDePrueba={(inputValue) => this.handleCallback(inputValue)}
        />
        <Tasks tasks={tasks} />
      </>
    );
  }
}

export default App;
