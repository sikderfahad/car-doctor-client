import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import ServiceInfo from "../pages/serviceInfo/ServiceInfo";
import Checkout from "../pages/checkout/Checkout";
import AddService from "../pages/addServices/AddService";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AllUsers from "../pages/allUsers/AllUsers";
import UserOrderCart from "../pages/userOrderCart/UserOrderCart";
import AllServiceOrders from "../pages/allServiceOrders/AllServiceOrders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
      {
        path: "users",
        element: (
          <PrivateRoute allowedRole={["admin"]}>
            <AllUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        ),
      },
      {
        path: "order-cart",
        element: (
          <PrivateRoute>
            <UserOrderCart />
          </PrivateRoute>
        ),
      },
      {
        path: "all-service-orders",
        element: (
          <PrivateRoute allowedRole={["admin", "officer"]}>
            <AllServiceOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "add-service",
        element: (
          <PrivateRoute allowedRole={["admin", "officer"]}>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "checkout/:id",
        element: (
          <Checkout />
          // <PrivateRoute>
          // </PrivateRoute>
        ),
      },
      {
        path: "service-info/:id",
        element: (
          <PrivateRoute>
            <ServiceInfo />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
// export default router;
