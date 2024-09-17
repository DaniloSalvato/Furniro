import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import PrivateRouter from "../components/PrivateRouter";
import CartPage from "../pages/Cart";
import CheckoutPage from "../pages/Checkout";
import ContactPage from "../pages/Contacts";
import HomePage from "../pages/Home";
import SingleProductPage from "../pages/Product";
import ShopPage from "../pages/Shop";
import LoginPage from "../pages/SingIn/Components/Login";
import RegisterPage from "../pages/SingUp/Components/Register";
import ErrorPage from "../pages/Error";

const Router = createBrowserRouter([
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
        element: (
          <PrivateRouter to="/login?redirectURL=/checkout">
            <CheckoutPage page="Checkout" />
          </PrivateRouter>
        ),
      },
      {
        path: "contact",
        element: <ContactPage page="Contact" />,
      },
      {
        path: "/product/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
    ],
  },
]);

export default Router;
