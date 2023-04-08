import React from "react";

export default function Title({ title }) {
  return (
    <div
      className="row"
      style={{
        backgroundColor: "#eee",
      }}
    >
      <div
        className="col-10 mx-auto my-2 text-center text-title"
        style={{
          padding: "100px 0",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            color: "var(--mainBlue)",
            letterSpacing: "0px",
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
