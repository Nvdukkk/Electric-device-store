import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";
import { ButtonContainer } from "../Button";
import { Link } from "react-router-dom";

export default class ProductModal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { id, img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto mt-5 col-md-6 col-lg-6 text-center p-4"
                    >
                      <img
                        src={img}
                        className="img-fluid"
                        alt="product"
                        style={{
                          marginBottom: "40px",
                        }}
                      />
                      <h5 className="mb-2">{title}</h5>
                      <h5 className="text-muted mb-4">Giá : ${price}</h5>
                      <Link to="/product">
                        <ButtonContainer onClick={() => closeModal()}>
                          Quay lại cửa hàng
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => {
                          value.addToCart(id)
                          closeModal()
                        }}>
                          Thêm vào giỏ hàng
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
