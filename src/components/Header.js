import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Header extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 justify-content-between">
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img
            src={logo}
            alt="logo"
            className="navbar-brand"
            style={{ maxHeight: "60px" }}
          />
          <p className="logo-text">Thiên Ân</p>
        </Link>
        <div>
          <Link to="/product">
            <ButtonContainer>
                <span className="me-0 me-sm-2">
                  <i className="fas fa-cart-plus" />
                </span>
                Cửa hàng
            </ButtonContainer>
          </Link>
          <Link to="/cart">
            <ButtonContainer>
              <span className="">
                <i className="fab fa-shopify" />
              </span>
            </ButtonContainer>
          </Link>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: white;
  position: sticky;
  top: 0;
  z-index: 9999;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
  }
`;
