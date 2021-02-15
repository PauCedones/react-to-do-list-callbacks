import React from "react";
import Tasks from "./components/Tasks/index";
import AddTask from "./components/AddTask/index";

class App extends React.Component {
  render() {
    return (
      <>
        <AddTask />
        <Tasks />
      </>
    );
  }
}

export default App;
