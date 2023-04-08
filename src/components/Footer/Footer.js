import { CONTACT_INFO } from "./constant";
import React from "react";

function Footer() {
  const renderChildren = (item) => {
    return item.map(({ id, icon, content }) => (
      <div key={id} className="d-flex p-2">
        <img src={icon} alt="icon" />
        <p
          className="m-0"
          style={{
            fontSize: "12px",
          }}
        >
          {content}
        </p>
      </div>
    ));
  };
  return (
    <div
      className="text-white px-4 bg-primary"
      style={{
        paddingTop: "80px",
      }}
    >
      <div
        className="d-flex flex-row justify-content-center"
        style={{
          marginBottom: "40px",
        }}
      >
        {CONTACT_INFO.map(({ id, children }) => (
          <div
            key={id}
            style={{
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            {renderChildren(children)}
          </div>
        ))}
      </div>
      <p
        className="text-center mb-0"
        style={{
          marginTop: "15px",
          padding: "15px 0",
          borderTop: "1px solid #ccc",
          fontSize: "12px",
        }}
      >
        Copyright © 2022 by Thuan An Co., Ltd. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
