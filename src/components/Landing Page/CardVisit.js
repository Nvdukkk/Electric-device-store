import React from "react";
import { CARD_VISIT } from "./constant";

function CardVisit() {
  return (
    <div
      style={{
        margin: "50px 0 0",
      }}
    >
      <div className="container">
        <div className="row mx-0">
          {CARD_VISIT.map(({ id, className, title, subtitle }) => (
            <div
              className="col medium-6 small-12 large-3 p-0  m-2 card-visit"
              key={id}
              style={{}}
            >
              <div className="text-center">
                <div
                  style={{
                    padding: "30px 10px",
                  }}
                >
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardVisit;
