import React from "react";
import { CARD_VISIT } from "./constant";

function CardVisit() {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="row mx-0">
          {CARD_VISIT.map(({ id, className, title, subtitle }) => (
            <div className="mt-3 col col-lg-3 col-md-6 col-12" key={id}>
              <div className="  p-0 card-visit">
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
