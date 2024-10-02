import React from "react";
import "./index.css";

import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { persistor, store } from "./stores";
import { RouterProvider } from "react-router-dom";
import Router from "./router";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={Router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
