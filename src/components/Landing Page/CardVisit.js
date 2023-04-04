import React from "react";
import { CARD_VISIT } from "./constant";

function CardVisit() {
  return (
    <div className="row mx-0 mt-5">
      {CARD_VISIT.map(({ id, className, title, subtitle }) => (
        <div
          className="col medium-6 small-12 large-3 p-0 border border-secondary-subtle rounded m-4 card-visit"
          key={id}
          style={{
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
            fontSize: "24px",
          }}
        >
          <div className="text-center">
            <div>
              <strong className={className}>{title}</strong>
              <div className="text-secondary">{subtitle}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardVisit;
