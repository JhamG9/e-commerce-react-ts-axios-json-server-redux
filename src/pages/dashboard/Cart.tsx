import { useEffect, useState } from "react";
import { getCartAction } from "../../actions/cart.action";
import { CartI } from "../../interfaces/Cart.interface";
import { CardProduct } from "../../components/CardProduct";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Cart = () => {
  const [productsInCart, setProductsInCart] = useState<CartI[]>([]);
  const cart = useSelector((state: RootState) => state.cart);    

  const getProductInCart = async () => {
    const productsCalledApi = await getCartAction();
    setProductsInCart(productsCalledApi);
  };

  useEffect(() => {
    getProductInCart();
  }, []);

  return (
    <div>
      <h1>Mis productos en Carrito</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 pt-4">
        {cart && productsInCart.map((productCart: CartI) => (
          <div className="col pt-4" key={productCart.id}>
            <CardProduct product={productCart.product} isAdmin={false} />
          </div>
        ))}
      </div>
    </div>
  );
};
