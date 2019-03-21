import React, { Component } from "react";
import "./App.css";
import Konvas from "./Component/Konva/Konva"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Konvas />
      </div>
    );
  }
}

export default App;
