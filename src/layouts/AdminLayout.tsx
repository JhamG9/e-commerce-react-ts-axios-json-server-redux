import React from "react";
import { HeaderAdmin } from "../components/HeaderAdmin";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <>
      <HeaderAdmin />

      <div className="container pt-4">
        <Outlet />
      </div>
    </>
  );
};
