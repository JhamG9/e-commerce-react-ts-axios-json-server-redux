import { useEffect, useState } from "react";
import { getCartAction } from "../../actions/cart.action";
import { CartI } from "../../interfaces/Cart.interface";
import { CardProduct } from "../../components/CardProduct";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Cart = () => {
  const [productsInCart, setProductsInCart] = useState<CartI[]>([]);
  const cart: CartI[] = useSelector((state: RootState) => state.cart.items);

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
      {cart.length > 0 ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 pt-4">
          {productsInCart.map((productCart: CartI) => (
            <div className="col pt-4" key={productCart.id}>
              <CardProduct product={productCart.product} isAdmin={false} />
            </div>
          ))}
        </div>
      ) : (
        <div className="pt-4">
          <h4>No tienes productos en el carrito :/ </h4>
          <p>
            Dirigete al listado de productos y agrega lo que quieras a tu
            carrito
          </p>
        </div>
      )}
    </div>
  );
};
