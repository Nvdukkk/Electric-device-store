import { GUEST_LIST } from "./constant";
import React from "react";

function GuestList() {
  return (
    <div
      className="text-center mt-5 px-5"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <h3>KHÁCH HÀNG</h3>
      <p>
        Trải qua nhiều năm làm việc, chúng tôi đã hợp tác với rất nhiều doanh
        nghiệp, cơ quan giáo dục lớn và nổi tiếng trên toàn lãnh thổ Việt Nam và
        quốc tế. Tất cả những đối tác từ trong nước tới nước ngoài đều có những
        phản hồi tích cực về giải pháp và phần mềm của chúng tôi.
      </p>
      <div className="slider row" >
        {GUEST_LIST.map(({ id, src }) => (
          <img
            key={id}
            src={src}
            alt="guest-list"
            className="col medium-6 small-12 large-3"
          />
        ))}
      </div>
    </div>
  );
}

export default GuestList;
