import React from "react";

export default function Title({ title }) {
  return (
    <div
      className="row"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)",
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
          style={{
            fontSize: "40px",
            color: "#000",
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
