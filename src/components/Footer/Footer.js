import { CONTACT_INFO } from "./constant";
import React from "react";

function Footer() {
  const renderChildren = (item) => {
    return item.map(({ id, icon, content }) => (
      <div key={id} className="d-flex p-2">
        <img src={icon} alt="icon" />
        <p className="m-0">{content}</p>
      </div>
    ))
  };
  return (
    <div className="text-white pt-3 px-4 pb-2 bg-primary">
      <p className="text-center">LIÊN HỆ</p>
      <div className="d-flex flex-row justify-content-center">
        {CONTACT_INFO.map(({ id, children }) => (
          <div key={id}>{renderChildren(children)}</div>
        ))}
      </div>
      <p className="text-center mt-3 mb-0">
        Copyright © 2022 by Thuanthanhtech Co., Ltd. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
