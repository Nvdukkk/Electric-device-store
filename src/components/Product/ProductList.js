import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import PropTypes from "prop-types";
import { getLocalStorageIncart } from "../../utils";
import Image from "../Image";

export default function ProductList(props) {
  const { id, title, img, price } = props.product;

  return (
    <ProductWrapper>
      <ProductConsumer>
        {(value) => (
          <div title={title} className="card relative">
            <Link to={`/details/${id}`} className="img-container p-4">
              <Image ratio="ratio-1x1" src={img} alt="product" />
            </Link>
            <button
              className="cart-btn"
              disabled={getLocalStorageIncart(id)}
              onClick={() => {
                value.openModal(id);
              }}
            >
              {getLocalStorageIncart(id) ? (
                <Link
                  to="/cart"
                  className="mb-0 cart-btn-text"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Đã có trong giỏ hàng
                </Link>
              ) : (
                <i className="fab fa-shopify" />
              )}
            </button>

            <Link
              to={`/details/${id}`}
              onClick={() => value.handleDetail(id)}
              className="card-footer text-center d-flex flex-column align-items-center justify-content-center"
            >
              <p
                className="line-clamp-2"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "5px",
                  height:'6vh'
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
                <span className="me-1">{`${price.toLocaleString(
                  "vi-VN"
                )} vnđ`}</span>
              </h5>
            </Link>
          </div>
        )}
      </ProductConsumer>
    </ProductWrapper>
  );
}

ProductList.propTypes = {
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
    transition: all 0.5s linear;
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
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
    .cart-btn {
      opacity: 1;
    }
  }
  .img-container {
    overflow: hidden;
  }
  .img-container img {
    transition: all ease 0.3s;
  }
  .img-container:hover img {
    transform: scale(1.08);
  }
  .cart-btn {
    position: absolute;
    bottom: 85px;
    right: 11px;
    padding: 1px 4px;
    background: #fff;
    border: 1px solid #000;
    color: black;
    font-size: 1.4rem;
    opacity: 0;
    transition: all 0.3s ease;
  }
  .cart-btn-text {
    color: black;
  }
  .cart-btn:hover {
    color: var(--mainWhite);
    background-color: #000;
    cursor: pointer;

    .cart-btn-text {
      color: var(--mainWhite);
    }
  }
`;
