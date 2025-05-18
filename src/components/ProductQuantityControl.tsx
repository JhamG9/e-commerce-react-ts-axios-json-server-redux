import { useEffect, useState } from "react";
import { ProductI } from "../interfaces/Product.interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import {
  createCartAction,
  deleteCartAction,
  getProductInCartAtion,
  updateCartAction,
} from "../actions/cart.action";
import { CartI } from "../interfaces/Cart.interface";
import { fetchCart } from "../store/cartSlice";
import { toast } from "react-toastify";

interface Props {
  product: ProductI;
}

export const ProductQuantityControl = ({ product }: Props) => {
  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.productId === product.id)
  );
  const [quantity, setQuantity] = useState<number>(cartItem?.quantity || 0);
  const [isFirstRun, setIsFirstRun] = useState(true);

  const dispatch = useDispatch<AppDispatch>();

  const updateCart = async () => {
    const productsInCart = await getProductInCartAtion(product.id);
    const productExisting: CartI = productsInCart[0];

    if (productExisting) {
      if (quantity === 0) {
        await deleteCartAction(productExisting.id);
      } else {
        await updateCartAction(productExisting.id, {
          ...productExisting,
          quantity,
        });
      }
    } else {
      await createCartAction({
        userId: "ftr356",
        productId: product.id,
        quantity,
      });
    }

    toast.success("Carrito actualizado", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    dispatch(fetchCart());
  };
  useEffect(() => {
    if (isFirstRun) {
      setIsFirstRun(false);
    } else {
      const timer = setTimeout(() => {
        updateCart();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [quantity]);

  return (
    <div className="d-flex align-items-center justify-content-center gap-2 m-auto">
      <button
        className="btn btn-outline-secondary rounded-circle"
        onClick={() => setQuantity((prev) => Math.max(prev - 1, 0))}
      >
        <i className="bi bi-dash"></i>
      </button>
      <span className="fs-5 px-3">{quantity}</span>
      <button
        className="btn btn-outline-secondary rounded-circle"
        onClick={() => setQuantity((prev) => prev + 1)}
      >
        <i className="bi bi-plus"></i>
      </button>
    </div>
  );
};
