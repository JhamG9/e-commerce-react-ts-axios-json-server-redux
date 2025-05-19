import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { alertShow } from "../../utils/alerts";

interface LoginI {
  email: string;
  password: string;
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginI>();
  
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginI> = async (data) => {
    const { email, password } = data;
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("isAdmin", "true");
      alertShow("Bienvenido administrador");
      navigate("/admin");
    } else {
      alertShow("Credenciales inválidas", "error");
    }
  };

  return (
    <div>
      <h1>Inciar sesión</h1>

      <div className="container mt-5 d-flex justify-content-center flex-column">
        <div className="w-100" style={{ maxWidth: "600px" }}>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Correo electrónico</label>
              <input
                type="email"
                {...register("email", {
                  required: "El correo electrónico es requerido",
                })}
                className="form-control"
                placeholder="Ingresa el correo electrónico"
              />

              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>

            <div className="form-group pt-4">
              <label>Contraseña</label>
              <input
                type="password"
                {...register("password", {
                  required: "La contraseña es requerida",
                })}
                className="form-control"
                placeholder="Ingresa el correo electrónico"
              />

              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
            </div>

            <button type="submit" className="btn btn-primary mt-4">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
