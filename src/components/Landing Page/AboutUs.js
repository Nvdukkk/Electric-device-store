import React from "react";
import { ButtonContainer } from "../Button";

function AboutUs() {
  return (
    <div className="bg-light row gx-0 align-items-center">
      <div className="col-lg-6 p-0">
        <div className="ratio ratio-16x9 aboutus-img">
          <img
            src="/image/contact_background.png"
            alt="about us img"
            className="cover"
            //   width={"100px"}
          />
        </div>
      </div>
      <div className="col-lg-6 p-0">
        <div className="aboutus-box bg-white p-4 p-lg-5 rounded">
          <div className="text-center">
            <h1 className="text-uppercase display-6 fw-bold">Về chúng tôi</h1>
            <p style={{ fontStyle: "italic" }}>
              Đến với Thiên An bạn luôn có được sự phục vụ tốt nhất của chúng
              tôi.
            </p>
          </div>
          <p className="mt-4 mt-lg-5">
            Sứ mệnh của Thiên An là đem lại những giải pháp và dịch vụ công nghệ
            tốt nhất nằm đáp những sự kỳ vọng của khách hàng, giúp khách hàng
            đạt được mục tiêu trong chiến lược kinh doanh lâu dài của họ.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
