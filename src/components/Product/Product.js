import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-6 mx-auto h-50 h-lg-100 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-4"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p
                      className="mb-0"
                      disabled
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      {" "}
                      Đã có trong giỏ hàng
                    </p>
                  ) : (
                    <i className="fab fa-shopify" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>

          <div className="card-footer d-flex flex-column align-items-center justify-content-center">
            <p
              className="product-limit-text"
              style={{
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "5px",
              }}
            >
              {title}
            </p>
            <h5
              className="mb-0"
              style={{
                fontSize: "14px",
              }}
            >
              <span className="me-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: trasparent;
    transition: all 0.5s linear;
    border-radius: 0;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
      transform: translateY(-10px);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all ease 0.5s;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.08);
  }
  .cart-btn {
    position: absolute;
    bottom: 20px;
    right: 20px;
    padding: 0.2rem 0.4rem;
    background: #fff;
    border: 1px solid #000;
    color: #000;
    font-size: 1.4rem;
    opacity: 0;
    transition: all 0.3s ease;
  }
  .img-container:hover .cart-btn {
    opacity: 1;
  }
  .cart-btn:hover {
    color: var(--mainWhite);
    background-color: #000;
    cursor: pointer;
  }
`;
