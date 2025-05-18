import { DashboardLayout } from "../layouts/DashboardLayout";
import { Login } from "../pages/auth/Login";
import { AboutUs } from "../pages/dashboard/AboutUs";
import { Cart } from "../pages/dashboard/Cart";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Promotions } from "../pages/dashboard/Promotions";

export const dashboardRoutes = {
  path: "",
  element: <DashboardLayout />,
  children: [
    { path: "", element: <Dashboard /> },
    { path: "about-us", element: <AboutUs /> },
    { path: "promotions", element: <Promotions /> },
    { path: "cart", element: <Cart /> },
    { path: "login", element: <Login /> },
  ],
};
