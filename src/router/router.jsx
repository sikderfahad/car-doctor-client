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
import Order from "../pages/order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "order", element: <Order /> },
      { path: "add-service", element: <AddService /> },
      { path: "checkout/:id", element: <Checkout /> },
      { path: "service-info/:id", element: <ServiceInfo /> },
    ],
  },
]);
// export default router;
