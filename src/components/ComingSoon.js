/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ButtonContainer } from "./Button";

function ComingSoon() {
  return (
    <div className="comingsoon">
      <div className="container text-center">
        <div className="mb-5 d-flex justify-content-between pt-4">
          <h3>Coming Soon</h3>
          <div className="">
            <a href="#" className="py-2 px-2 px-md-3 text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="py-2 px-2 px-md-3 text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="py-2 px-2 px-md-3 text-white">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="py-2 px-2 px-md-3 text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="comingsoon_body">
          <h1 className="text-uppercase">Cuộc phiêu lưu đã bắt đầu</h1>
          <p>Chúng tôi đang cập nhật thêm nhiều nội dung mới...</p>
          <ButtonContainer>Nhận thông báo</ButtonContainer>
        </div>
        <div className="p-5">
          Copyright © 2018 by
          <span className="text-primary"> Thuanthanhtech Co., Ltd. </span>
           All rights reserved
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
