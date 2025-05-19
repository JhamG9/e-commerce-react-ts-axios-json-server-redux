import { createBrowserRouter } from "react-router-dom";
import { EcommerceReact } from "../EcommerceReact";
import { adminRoutes } from "./adminRoutes";
import { dashboardRoutes } from "./dashboardRoutes";

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
