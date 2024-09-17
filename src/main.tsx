import React from "react";
import "./index.css";

import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./stores";
import { RouterProvider } from "react-router-dom";
import Router from "./router";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>
);
