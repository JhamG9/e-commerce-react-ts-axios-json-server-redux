import { AdminLayout } from "../layouts/AdminLayout";
import { ListProducts } from "../pages/admin/ListProducts";
import { AddEditProduct } from "../pages/admin/AddEditProduct";

export const adminRoutes = {
  path: "admin",
  element: <AdminLayout />,
  children: [
    { path: "", element: <ListProducts /> },
    { path: "product/add", element: <AddEditProduct /> },
    { path: "product/edit/:id", element: <AddEditProduct /> },
    // más rutas aquí...
  ],
};
