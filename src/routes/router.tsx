import { createBrowserRouter } from "react-router-dom";
import { EcommerceReact } from "../EcommerceReact";
import { adminRoutes } from "./adminRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <EcommerceReact />,
    children: [
        adminRoutes
    ],
  },
]);
