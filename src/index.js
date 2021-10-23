import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/App.css";

// step 3 is to import external data to the index file THEN passing it to the app.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
