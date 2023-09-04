import React from "react";
import ReactDOM from "react-dom/client";
import "./app/styles/global.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import { setupStore } from "app/store/store";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
    <HelmetProvider>
      <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
      </BrowserRouter>
    </HelmetProvider>
);
