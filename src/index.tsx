import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/App";
import "./app/styles/global.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
