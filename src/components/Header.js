import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default function Header() {
  return (
    <header className="w-100 position-sticky top-0 bg-white z-3">
      <nav className="container navbar navbar-expand-sm navbar-dark justify-content-between">
        <Link
          to="/"
          className="d-flex align-items-center text-decoration-none ms-2 ms-sm-0"
        >
          <img
            loading="lazy"
            src="../logo.jpg"
            alt="logo"
            className="navbar-brand"
            style={{ maxHeight: "60px" }}
          />
          <p className="logo-text">Thiên Ân</p>
        </Link>
        <div>
          <Link to="/product">
            <ButtonContainer>
              <i className="fab fa-shopify me-0 me-sm-2" />
              <span className="d-none d-sm-inline">Cửa hàng</span>
            </ButtonContainer>
          </Link>
          <Link to="/cart">
            <ButtonContainer>
              <i className=" fas fa-cart-plus" />
            </ButtonContainer>
          </Link>
        </div>
      </nav>
    </header>
  );
}
