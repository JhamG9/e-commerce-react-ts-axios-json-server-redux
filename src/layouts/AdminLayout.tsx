import { HeaderAdmin } from "../components/HeaderAdmin";
import { Navigate, Outlet } from "react-router-dom";

export const AdminLayout = () => {
  const isAuthenticated = localStorage.getItem("isAdmin");

  return isAuthenticated ? (
    <>
      <HeaderAdmin />
      <div className="container pt-4">
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to={"/login"} replace />
  );
};
