import { getProductsAction } from "../../actions/producst.action";
import { CardProduct } from "../../components/CardProduct";
import { useEffect, useState } from "react";
import { ProductI } from "../../interfaces/Product";

export const ListProducts = () => {
  const [products, setProducts] = useState<ProductI[]>([]);
  const getProducts = async () => {
    const response = await getProductsAction();
    setProducts(response);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Gestiona tus productos</h1>

      
      <div className="row row-cols-4 pt-4">
        {products.map((product: ProductI) => (
          <div className="col">
            <CardProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
