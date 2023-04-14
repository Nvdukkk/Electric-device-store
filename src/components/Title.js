import React from "react";

export default function Title({ title }) {
  return (
    <div
      className="row"
      style={{
        backgroundImage:
          "url(../image/product-background.webp)",
        backgroundPosition: "cemter",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="col-10 mx-auto my-2 text-center text-title"
        style={{
          padding: "100px 0",
        }}
      >
        <h1
          className=""
          style={{
            color: "#000",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
