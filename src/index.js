import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";
import App from "./components/App";
import { location, forecasts } from "./data/forecast.json";

// step 3 is to import external data to the index file THEN passing it to the app.

ReactDOM.render(
  <React.StrictMode>
    <App forecasts={forecasts} location={location} />
  </React.StrictMode>,
  document.getElementById("root")
);
