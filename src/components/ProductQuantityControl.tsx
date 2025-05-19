import { useEffect, useState } from "react";
import { ProductI } from "../interfaces/Product.interface";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useCartManager } from "../hooks/useCartManager";
interface Props {
  product: ProductI;
}

export const ProductQuantityControl = ({ product }: Props) => {
  const { updateCart } = useCartManager();
  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.productId === product.id)
  );
  const [quantity, setQuantity] = useState<number>(cartItem?.quantity || 0);
  const [isFirstRun, setIsFirstRun] = useState(true);

  useEffect(() => {
    if (isFirstRun) {
      setIsFirstRun(false);
    } else {
      const timer = setTimeout(() => {
        updateCart(product, quantity);
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
