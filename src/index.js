import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Widget from "./components/Widget";

function App() {
  return (
    <div className="App">
      <Widget />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
