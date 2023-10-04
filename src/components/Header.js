import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  return (
    <header
      className="w-100 position-fixed top-0 bg-white z-3"
      style={{ boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.15)" }}
    >
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
          <Link to="/product" title="Cửa hàng">
            <Button>
              <i
                className="fab fa-shopify me-0 me-sm-2"
                style={{ width: "18px", height: "18px" }}
              />
              <span className="d-none d-sm-inline">Cửa hàng</span>
            </Button>
          </Link>
          <Link to="/cart" title="Giỏ hàng">
            <Button>
              <i
                className=" fas fa-cart-plus"
                style={{ width: "18px", height: "18px" }}
              />
            </Button>
          </Link>
          {/* <Link to="/login" title="Người dùng">
            <Button>
              <i
                className=" fas fa-user"
                style={{ width: "18px", height: "18px" }}
              />
            </Button>
          </Link>
          <Link to="/setting" title="Cấu hình">
            <Button>
              <i
                className=" fas fa-gear"
                style={{ width: "18px", height: "18px" }}
              />
            </Button>
          </Link> */}
        </div>
      </nav>
    </header>
  );
}
