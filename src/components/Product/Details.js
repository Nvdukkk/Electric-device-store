import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

export default class Detail extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, company, img, info, price, title, inCart } =
            value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img
                    loading="lazy"
                    src={img}
                    alt="product"
                    className="img-fluid"
                  />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h4 className="text-title text-muted mt-3 mb-2">
                    Sản xuất bởi: <span>{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>{`Giá: ${price} vnđ`}</strong>
                  </h4>
                  <p className="font-weight-bold mt-3 mb-0">Tổng quan:</p>
                  <p className="text-muted lead">{info}</p>
                  <div className="text-center">
                    <Link to="/product">
                      <ButtonContainer className="w-mw992-100">
                        Quay lại cửa hàng
                      </ButtonContainer>
                    </Link>
                    <Link to="/cart">
                      {inCart ? (
                        <ButtonContainer cart className="w-mw992-100">
                          Đã có trong giỏ hàng
                        </ButtonContainer>
                      ) : (
                        <ButtonContainer
                          className="w-mw992-100"
                          cart
                          onClick={() => {
                            value.addToCart(id);
                          }}
                        >
                          Thêm vào giỏ hàng
                        </ButtonContainer>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
