import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Ye import hona chahiye
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* App ko BrowserRouter se lapetna na bhulein */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
