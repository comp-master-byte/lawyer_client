import React from "react";
import ReactDOM from "react-dom/client";
import "./app/styles/global.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import { setupStore } from "app/providers/store";
import { Provider } from "react-redux";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
    <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
);
