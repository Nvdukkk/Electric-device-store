import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="text-white px-4 bg-dark"
      style={{
        paddingTop: "80px",
      }}
    >
      <div className="d-flex flex-row container mb-5">
        <div className="col-4">
          <h4>Liên hệ</h4>
          <p>
            <i className="fab fa-shopify"></i>
            Phone: 086.993.0568
          </p>
          <p>
            <i className="fab fa-shopify"></i>
            Email: thienansupport@gmail.com
          </p>
          <p>
            <i className="fab fa-shopify"></i>
            Địa chỉ: 68/188/45 Nguyễn Văn Linh, Q.Long Biên
          </p>
        </div>
        <div className="col-2 d-flex flex-column">
          <h4>Liên kết</h4>
          <a href="#slider">Trang chủ</a>
          <a href="#aboutus">Về chúng tôi</a>
          <Link to="/product">Shop</Link>
        </div>
        <div className="col-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2382970000695!2d105.91707672236994!3d21.02314908398219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a921e594b345%3A0x35aca77df17838e4!2zMTg4IE5nLiA2OCDEkC4gTmd1eeG7hW4gVsSDbiBMaW5oLCBUaOG6oWNoIELDoG4sIExvbmcgQmnDqm4sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1681199025050!5m2!1svi!2s"
            height="200"
            width="100%"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </div>
      <p
        className="text-center mb-0 mt-4 py-4"
        style={{
          borderTop: "1px solid #ccc",
          fontSize: "12px",
        }}
      >
        Copyright © 2022 by Thuan An Co., Ltd. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
