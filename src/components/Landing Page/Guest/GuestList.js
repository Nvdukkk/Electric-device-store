import { GUEST_LIST } from "./constant";
import React from "react";

function GuestList() {
  return (
    <div
      className="text-center mt-5 px-5"
      style={{ backgroundColor: "#f5f5f5", padding: "100px 0" }}
    >
      <h3
        style={{
          fontSize: "40px",
          color: "var(--mainBlue)",
          fontWeight: "bold",
        }}
      >
        KHÁCH HÀNG
      </h3>
      <p
        style={{
          width: "80%",
          margin: "20px auto 0",
        }}
      >
        Trải qua nhiều năm làm việc, chúng tôi đã hợp tác với rất nhiều doanh
        nghiệp, cơ quan giáo dục lớn và nổi tiếng trên toàn lãnh thổ Việt Nam và
        quốc tế. Tất cả những đối tác từ trong nước tới nước ngoài đều có những
        phản hồi tích cực về giải pháp và phần mềm của chúng tôi.
      </p>
      <div className="slider row" style={{ margin: "80px 0 0 0" }}>
        {GUEST_LIST.map(({ id, src }) => (
          <div className="col medium-6 small-12 large-3">
            <div
              style={{
                width: "100%",
                padding: "20px",
                height: "300px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                key={id}
                src={src}
                alt="guest-list"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestList;
