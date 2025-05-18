import { AdminLayout } from "../layouts/AdminLayout";
import { ListProducts } from "../pages/admin/ListProducts";
import { AddEditProduct } from "../pages/admin/AddEditProduct";
import { ListUsers } from "../pages/admin/ListUsers";

export const adminRoutes = {
  path: "admin",
  element: <AdminLayout />,
  children: [
    { path: "", element: <ListProducts /> },
    { path: "product/add", element: <AddEditProduct /> },
    { path: "product/edit/:id", element: <AddEditProduct /> },
    { path: "users", element: <ListUsers /> },
  ],
};
