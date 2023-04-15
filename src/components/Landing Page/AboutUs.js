import React from "react";
import { Link } from "react-router-dom";
import useVisible from "../../customHook/useVisible";

function AboutUs() {
  const visible = useVisible("aboutus");

  return (
    <div id="aboutus">
      <div className="container">
        <div className="row gx-0 align-items-center">
          <div
            className={`col-lg-6 p-0 aboutus-img ${visible ? "fade-left" : ""}`}
          >
            <img
              loading="lazy"
              src="../image/aboutus-img.webp"
              alt="about us img"
              className="w-100"
            />
          </div>
          <div className={`col-lg-6 p-0 ${visible ? "fade-right" : ""}`}>
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
              <p className="mt-4 mt-lg-5 line-clamp-4">
                Sứ mệnh của Thiên An là cung cấp các giải pháp và dịch vụ tối ưu
                nhằm đáp ứng mọi nhu cầu và mong muốn của khách hàng, góp phần
                giúp khách hàng đạt được các mục tiêu kinh doanh dài hạn trong
                lĩnh vực xây dựng. Chúng tôi cam kết cung cấp các sản phẩm và
                dịch vụ chất lượng cao, đảm bảo an toàn và hiệu quả, đồng thời
                luôn nâng cao chất lượng phục vụ để đáp ứng sự yêu cầu của thị
                trường và đối tác.
              </p>
              <Link to="/comingsoon" className="text-black mt-5">
                Xem thêm <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
