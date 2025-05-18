import { DashboardLayout } from "../layouts/DashboardLayout";
import { AboutUs } from "../pages/dashboard/AboutUs";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Promotions } from "../pages/dashboard/Promotions";

export const dashboardRoutes = {
  path: "",
  element: <DashboardLayout />,
  children: [
    { path: "", element: <Dashboard /> },
    { path: "about-us", element: <AboutUs /> },
    { path: "promotions", element: <Promotions /> },
  ],
};
