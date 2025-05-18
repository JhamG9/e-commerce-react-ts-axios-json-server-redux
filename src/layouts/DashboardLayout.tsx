import { useEffect } from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import { getCartAction } from "../actions/cart.action";
import { initializeCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

export const DashboardLayout = () => {
  const dispatch = useDispatch();

  const getCart = async () => {
    const response = await getCartAction();
    dispatch(initializeCart(response));
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <Header />
      <div className="container pt-4">
        <Outlet />
      </div>
      <ToastContainer />
    </>
  );
};
