import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Cards from "./components/Cards";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Cards />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
