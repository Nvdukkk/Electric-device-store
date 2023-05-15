import React from "react";
import { ProductConsumer } from "../../context";
import { ButtonContainer } from "../Button";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import Image from "../Image";


export default function ProductModal() {
  return (
    <ProductConsumer>
      {(value) => {
        const { modalOpen, closeModal } = value;
        const { id, img, title, price } = value.modalProduct;
        if (!modalOpen) {
          return null;
        } else {
          return (
            <ReactModal
              isOpen={modalOpen}
              contentLabel="onRequestClose"
              onRequestClose={() => closeModal()}
            >
              <div className="container">
                <div className="row">
                  <div className="text-center ">
                    <Image
                      ratio="ratio-1x1"
                      loading="lazy"
                      src={img}
                      alt="product"
                    />
                    <h5 className="my-2">{title}</h5>
                    <h5 className="text-muted mb-4">Giá: {price.toLocaleString('vi-VN')} vnđ</h5>
                    <Link to="/product">
                      <ButtonContainer
                        className="w-mw992-100"
                        onClick={() => closeModal()}
                      >
                        Quay lại cửa hàng
                      </ButtonContainer>
                    </Link>
                    <Link to="/cart">
                      <ButtonContainer
                        className="w-mw992-100"
                        cart
                        onClick={() => {
                          value.addToCart(id);
                          closeModal();
                        }}
                      >
                        Thêm vào giỏ hàng
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ReactModal>
          );
        }
      }}
    </ProductConsumer>
  );
}
ReactModal.setAppElement("#root");

ReactModal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.3)";
ReactModal.defaultStyles.overlay.zIndex = "9999";
ReactModal.defaultStyles.overlay.display = "flex";
ReactModal.defaultStyles.overlay.alignItems = "center";
ReactModal.defaultStyles.overlay.justifyContent = "center";
ReactModal.defaultStyles.content.inset = "auto";
ReactModal.defaultStyles.content.margin = "0 20px";
