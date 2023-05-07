import React from "react";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div
      className="d-flex justify-content-center align-items-center w-100"
      style={{
        minHeight: "89.6vh",
        backgroundImage: 'url("../image/checkout-background.webp")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row h-100 bg-white text-center py-4">
          <div className="my-3 d-flex justify-content-center">
            <div
              className="p-3 rounded-circle"
              style={{ backgroundColor: "rgb(231 252 237)" }}
            >
              <div
                className="p-3 rounded-circle"
                style={{ backgroundColor: "#0ce410" }}
              >
                <i className="fas fa-check fa-beat fa-2xl text-white"></i>
              </div>
            </div>
          </div>

          <h2 className="mb-4">Đặt hàng thành công</h2>
          <h6>
            Chúng tôi sẽ liên hệ với bạn ngay sau khi nhận được đơn đặt hàng này
          </h6>
          <p className="mb-4">
            Mọi thắc mắc xin vui lòng liên hệ hotline: 0937 831 321
          </p>
          <div>
            <Link to="/">
              <ButtonContainer className="w-mw768-75">
                <i className="fas fa-home"></i>Trở về trang chủ
              </ButtonContainer>
            </Link>
            <Link to="/product">
              <ButtonContainer cart className="w-mw768-75">
                Mua thêm sản phẩm
              </ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
