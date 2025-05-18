import { getProductsAction } from "../../actions/producst.action";
import { CardProduct } from "../../components/CardProduct";
import { useEffect, useState } from "react";
import { ProductI } from "../../interfaces/Product";
import { Link } from "react-router-dom";

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
      <div className="d-flex justify-content-between align-items-center">
      <h1>Gestiona tus productos</h1>
      <Link to={'/admin/product/add'} className="btn btn-primary">Agregar Producto</Link>
      </div>
      <div className="row row-cols-4 pt-4">
        {products.map((product: ProductI) => (
          <div className="col pt-4" key={product.id}>
            <CardProduct product={product} reloadProducts={getProducts} />
          </div>
        ))}
      </div>
    </div>
  );
};
