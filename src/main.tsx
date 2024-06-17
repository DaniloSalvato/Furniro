import React from "react";
import App from "./App";
import "./index.css";

import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import SingleProductPage from "./pages/SingleProductPage";
import { store, persistor } from "./redux";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage page="Shop" />,
      },
      {
        path: "cart",
        element: <CartPage page="Cart" />,
      },
      {
        path: "checkout",
        element: <CheckoutPage page="Checkout" />,
      },
      {
        path: "contact",
        element: <ContactPage page="Contact" />,
      },
      {
        path: "/product/:id",
        element: <SingleProductPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
