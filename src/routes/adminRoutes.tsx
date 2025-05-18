import { AdminLayout } from "../layouts/AdminLayout";
import { ListProducts } from "../pages/admin/ListProducts";

export const adminRoutes = {
  path: 'admin',
  element: <AdminLayout/>,
  children: [
    { path: '', element:  <ListProducts />}
    // más rutas aquí...
  ],
};