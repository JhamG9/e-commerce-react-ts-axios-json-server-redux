import { createBrowserRouter } from "react-router-dom";
import { EcommerceReact } from "../EcommerceReact";
import { adminRoutes } from "./adminRoutes";
import { dashboardRoutes } from "./dashboardRoutes";
import { Login } from "../pages/auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <EcommerceReact />,
    children: [
      dashboardRoutes, 
      adminRoutes,

    ],
  },
]);
