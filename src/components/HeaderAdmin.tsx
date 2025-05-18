import { Link, useNavigate } from "react-router-dom";
import { alertShow } from "../utils/alerts";

export const HeaderAdmin = () => {
  const navigate = useNavigate();

  const handleLogout = () =>{
    alertShow('¡Gracias por visitarnos! :)')
    localStorage.removeItem("isAdmin");
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to={"/admin"} className="navbar-brand fw-bolder fs-4">
          E-Commerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link to={"/admin"} className="nav-link">
                Productos
              </Link>
            </li>

            <li className="nav-item active">
              <Link to={"/admin/users"} className="nav-link">
                Usuarios
              </Link>
            </li>
          </ul>

          <span className="navbar-text">
            <button className="btn btn-outline-light" onClick={handleLogout}>Cerrar sesión</button>
          </span>
        </div>
      </div>
    </nav>
  );
};
