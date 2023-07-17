import React from "react";

const CARD_VISIT = [
  {
    id: 1,
    className: "text-primary",
    title: "TƯ VẤN 24/7",
    subtitle: "MIỄN PHÍ",
  },
  {
    id: 2,
    className: "text-success",
    title: "GỌI NGAY",
    subtitle: "086.993.0568",
  },
  {
    id: 3,
    className: "text-danger",
    title: "VẬN CHUYỂN",
    subtitle: "MIỄN PHÍ",
  },
  {
    id: 4,
    className: "text-primary",
    title: "THANH TOÁN",
    subtitle: "TIỆN LỢI",
  },
]

function CardVisit() {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="row mx-0">
          {CARD_VISIT.map(({ id, className, title, subtitle }) => (
            <div className="mt-3 col col-lg-3 col-md-6 col-12" key={id}>
              <div className="p-0 card-visit">
                <div className="text-center ">
                  <div className="py-5 px-2">
                    <strong
                      className={className}
                      style={{
                        fontSize: "20px",
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      {title}
                    </strong>
                    <div className="text-secondary">{subtitle}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardVisit;
