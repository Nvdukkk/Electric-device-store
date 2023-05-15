import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="text-white bg-black"
      style={{
        paddingTop: "80px",
      }}
    >
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-5 col-lg-4">
            <h4 className="mb-4 text-uppercase ">Liên hệ</h4>
            <a
              href="tel:0869930568"
              className="text-white"
              style={{ lineHeight: "31px" }}
            >
              <i className="fas fa-phone-alt me-2 mb-3" />
              086.993.0568
            </a>
            <p>
              <i className="fas fa-envelope me-2" />
              thienansupport@gmail.com
            </p>
            <p>
              <i className="fas fa-map-marker-alt me-2" />
              68/188/45 Nguyễn Văn Linh, Q.Long Biên
            </p>
          </div>

          <div className="col-5 col-md-2 col-lg-2 mt-2 mt-sm-0 d-flex flex-column">
            <h4 className="mb-4 text-uppercase ">Liên kết</h4>
            <div>
              <a href="#slider" className="text-white">
                Trang chủ
              </a>
            </div>
            <div className=" my-3 mx-0">
              <a href="#aboutus" className="text-white">
                Về chúng tôi
              </a>
            </div>
            <div>
              <Link
                to="/product"
                style={{
                  color: "#fff",
                }}
              >
                Shop
              </Link>
            </div>
          </div>

          <div className="col-7 col-md-4 col-lg-6 mt-2 mt-sm-0 border border-4 rounded p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2382970000695!2d105.91707672236994!3d21.02314908398219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a921e594b345%3A0x35aca77df17838e4!2zMTg4IE5nLiA2OCDEkC4gTmd1eeG7hW4gVsSDbiBMaW5oLCBUaOG6oWNoIELDoG4sIExvbmcgQmnDqm4sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1681199025050!5m2!1svi!2s"
              height="100%"
              width="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            />
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
    </footer>
  );
}
