import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  createProductAction,
  getProductById,
  updateProductAction,
} from "../../actions/producst.action";
import { ProductI } from "../../interfaces/Product.interface";
import { SubmitHandler, useForm } from "react-hook-form";
import { alertShow } from "../../utils/alerts";

export const AddEditProduct = () => {
  const [product, setProduct] = useState<ProductI>();
  const { id = "" } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm<ProductI>();

  const getDataProduct = async () => {
    const response = await getProductById(id);
    setProduct(response);
    reset({
      ...response,
    });
  };

  const onSubmit: SubmitHandler<ProductI> = async (data) => {
    if (id) {
      updateProductAction(id, data);
      alertShow("Producto actualizado");
    } else {
      createProductAction(data);
      alertShow("Producto creado");
    }
    navigate("/admin");
  };

  useEffect(() => {
    if (id) {
      getDataProduct();
    }
  }, []);

  return (
    <div className="pb-4">
      <h1>{id ? `Editar ${product?.name}` : "Agregar producto"}</h1>
      <Link to={"/admin/product/add"} />
      <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Nombre Producto</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa el nombre del producto"
            {...register("name", {
              required: "El nombre del producto es obligatorio",
            })}
          />
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
        </div>

        <div className="form-group pt-3">
          <label>Descripción</label>
          <textarea
            className="form-control"
            rows={3}
            {...register("description", {
              required: "La descripción del producto es obligatoria",
              minLength: {
                value: 20,
                message: "La descripción debe tener al menos 20 caracteres",
              },
            })}
          ></textarea>
          {errors.description && (
            <small className="text-danger">{errors.description.message}</small>
          )}
        </div>

        <div className="form-group pt-3">
          <label>Precio</label>
          <input
            type="number"
            className="form-control"
            placeholder="Ingresa el nombre del producto"
            {...register("price", { required: true })}
          />
        </div>

        <div className="form-group pt-3">
          <label>Cantidad disponible</label>
          <input
            type="number"
            className="form-control"
            placeholder="Ingresa la cantidad disponible"
            {...register("stock", {
              required: "La cantidad disponible es obligatoria",
              min: {
                value: 1,
                message: "La cantidad debe ser al menos 1",
              },
            })}
          />
          {errors.stock && (
            <small className="text-danger">{errors.stock.message}</small>
          )}
        </div>

        <div className="form-group pt-3">
          <label>Categoría</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa el nombre del producto"
            {...register("category", { required: true })}
          />
        </div>

        <div className="form-group pt-3">
          <label>Imagén producto</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa el nombre del producto"
            {...register("image", { required: true })}
          />
          {watch("image") && (
            <img
              className="pt-4 preview-image"
              src={watch("image")}
              alt={product?.name}
            />
          )}
        </div>

        <div className="d-flex justify-content-end pt-4">
          <button type={"submit"} className="btn btn-primary">
            {id ? "Actualizar" : "Agregar"}
          </button>
        </div>
      </form>
    </div>
  );
};
