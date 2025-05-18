import { ProductI } from "../interfaces/Product";

interface Props {
  product: ProductI;
}


export const CardProduct = ({product}:Props) => {
  return (
    <div className="card p-2">
      <div className="d-flex justify-content-end gap-2 mr-2">
        <button className="btn btn-primary">
          <i className="bi bi-pencil"></i>
        </button>

        <button className="btn btn-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>

  
      <img
        src={product.image}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body text-center">
        <h4>{product.name}</h4>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
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
