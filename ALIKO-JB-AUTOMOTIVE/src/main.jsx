import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./styles/dashboard.css";

window.onerror = function (msg, src, line, col, err) {
  document.body.innerHTML =
    "<pre style='color:red;white-space:pre-wrap;'>" +
    "ERROR:\n" + msg +
    "\nLine: " + line +
    "\nColumn: " + col +
    "\n" + (err?.stack || "") +
    "</pre>";
};

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
