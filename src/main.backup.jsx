import "leaflet/dist/leaflet.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./auth/AuthProvider";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <AuthProvider>
<App />
</AuthProvider>
  
);
