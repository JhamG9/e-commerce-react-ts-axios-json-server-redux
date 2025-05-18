import { useEffect, useState } from "react";
import { ProductI } from "../../interfaces/Product.interface";
import { getProductsAction } from "../../actions/producst.action";
import { CardProduct } from "../../components/CardProduct";

export const Dashboard = () => {

  //TODO: Agregar Carrito y mensajes para carro actualizado
  // Login con una pagina sencilla
  // Cuidar las rutas de Admin 
  const [products, setProducts] = useState<ProductI[]>([]);

  const getProducts = async () => {
    const response = await getProductsAction();
    setProducts(response);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <h1>Nuestros Productos</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 pt-4">
        {products.map((product: ProductI) => (
          <div className="col pt-4" key={product.id}>
            <CardProduct product={product} isAdmin={false} />
          </div>
        ))}
      </div>
    </>
  );
};
