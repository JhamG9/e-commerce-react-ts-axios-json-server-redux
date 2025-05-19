import { useDispatch } from "react-redux";
import { fetchCart } from "../store/cartSlice";
import { AppDispatch } from "../store/store";
import {
  createCartAction,
  deleteCartAction,
  getProductInCartAtion,
  updateCartAction,
} from "../actions/cart.action";
import { ProductI } from "../interfaces/Product.interface";
import { CartI } from "../interfaces/Cart.interface";
import { toast } from "react-toastify";

export const useCartManager = () => {
  const dispatch = useDispatch<AppDispatch>();

  const updateCart = async (product: ProductI, quantity: number) => {
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
      position: "bottom-right",
      autoClose: 2000,
      pauseOnHover: false,
      theme: "light",
    });
    dispatch(fetchCart());
  };

  return { updateCart };
};
