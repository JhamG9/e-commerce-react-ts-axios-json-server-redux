import { Link } from "react-router-dom";
import { deleteProductAction } from "../actions/producst.action";
import { ProductI } from "../interfaces/Product.interface";
import { alertQuestion, alertShow } from "../utils/alerts";
import { ProductQuantityControl } from "./ProductQuantityControl";

interface Props {
  product: ProductI;
  isAdmin?: boolean;
  reloadProducts?: () => void;
}

export const CardProduct = ({
  product,
  reloadProducts = () => null,
  isAdmin = true,
}: Props) => {
  const onDeleteProduct = async () => {
    const confirmDelete = await alertQuestion(
      `¿Estás seguro de eliminar ${product.name}?`,
      "Si, Eliminar",
      "Cancelar"
    );
    if (!confirmDelete) return;

    await deleteProductAction(product.id);
    alertShow("Producto eliminado correctamente");
    reloadProducts();
  };

  return (
    <div className="card p-2">
      {isAdmin && (
        <div className="d-flex justify-content-end gap-2 mr-2">
          <Link to={`/admin/product/edit/${product.id}`}>
            <button className="btn btn-primary">
              <i className="bi bi-pencil"></i>
            </button>
          </Link>

          <button className="btn btn-danger" onClick={onDeleteProduct}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      )}

      <img
        src={product.image}
        className="card-img-top img-card-product"
        alt={product.name}
      />
      <div className="card-body ">
        <h4>{product.name}</h4>
        <p className="card-text">{product.description}</p>
        <p data-testid="product-stock">
          <strong>Cantidad:</strong> {product.stock}
        </p>
        <p data-testid="product-price">
          <strong>Precio:</strong> {product.price}
        </p>

        {!isAdmin && <ProductQuantityControl product={product} />}
      </div>
    </div>
  );
};
