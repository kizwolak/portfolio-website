import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import RouteSwitch from "./RouteSwitch.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
