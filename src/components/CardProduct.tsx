import { Link } from "react-router-dom";
import { deleteProductAction } from "../actions/producst.action";
import { ProductI } from "../interfaces/Product";
import { alertQuestion, alertShow } from "../utils/alerts";

interface Props {
  product: ProductI;
  reloadProducts: () => void;
}

export const CardProduct = ({ product, reloadProducts }: Props) => {
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

      <img
        src={product.image}
        className="card-img-top img-card-product"
        alt={product.name}
      />
      <div className="card-body text-center">
        <h4>{product.name}</h4>
        <p className="card-text">{product.description}</p>
        <div className="d-flex align-items-center justify-content-center gap-2 m-auto">
          <button className="btn btn-outline-secondary rounded-circle">
            –
          </button>
          <span className="fs-5 px-3">{1}</span>
          <button className="btn btn-outline-secondary rounded-circle">
            +
          </button>
        </div>
      </div>
    </div>
  );
};
