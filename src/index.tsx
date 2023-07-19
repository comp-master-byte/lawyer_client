import React from "react";
import ReactDOM from "react-dom/client";
import "./app/styles/global.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
