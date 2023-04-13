import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div id="aboutus">
      <div className="container">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-6 p-0 aboutus-img">
            <img
              src="https://images.unsplash.com/photo-1514380174678-ac7d0a175926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="about us img"
              className="w-100"
            ></img>
          </div>
          <div className="col-lg-6 p-0">
            <div className="aboutus-box bg-light p-4 p-lg-5 ">
              <div className="text-center">
                <h1 className="text-uppercase display-6 fw-bold mb-2">
                  Về chúng tôi
                </h1>
                <p style={{ fontStyle: "italic" }}>
                  Đến với Thiên An bạn luôn có được sự phục vụ tốt nhất của
                  chúng tôi.
                </p>
              </div>
              <p className="mt-4 mt-lg-5">
                Sứ mệnh của Thiên An là cung cấp các giải pháp và dịch vụ tối ưu
                nhằm đáp ứng mọi nhu cầu và mong muốn của khách hàng, góp phần
                giúp khách hàng đạt được các mục tiêu kinh doanh dài hạn trong
                lĩnh vực xây dựng. Chúng tôi cam kết cung cấp các sản phẩm và
                dịch vụ chất lượng cao, đảm bảo an toàn và hiệu quả, đồng thời
                luôn nâng cao chất lượng phục vụ để đáp ứng sự yêu cầu của thị
                trường và đối tác.
              </p>
              <Link
                to="/comingsoon"
                style={{
                  color: "#000",
                  marginTop: "30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Xem thêm <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
