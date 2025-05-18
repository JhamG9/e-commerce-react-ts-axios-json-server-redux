import React from "react";
import { Link } from "react-router-dom";
import { CartSummary } from "./CartSummaty";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to={"/"} className="navbar-brand fw-bolder fs-4">
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
              <Link to={"/about-us"} className="nav-link">
                Sobre Nosotros
              </Link>
            </li>

            <li className="nav-item active">
              <Link to={"/promotions"} className="nav-link">
                Promociones
              </Link>
            </li>
          </ul>

          <div>
            <CartSummary />
          </div>
        </div>
      </div>
    </nav>
  );
};
