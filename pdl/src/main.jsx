import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PomodoroProvider } from "./context/PomodoroContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PomodoroProvider>
      <App />
    </PomodoroProvider>
  </React.StrictMode>
);
