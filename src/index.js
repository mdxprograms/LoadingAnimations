import React from "react";
import { render } from "react-dom";
import "./base.css";

import { Dots } from "./animations";

const App = () => (
  <div>
    <h2>Loading Animations...</h2>
    <hr />
    <h4>Dots</h4>
    <Dots />
  </div>
);

render(<App />, document.getElementById("root"));
