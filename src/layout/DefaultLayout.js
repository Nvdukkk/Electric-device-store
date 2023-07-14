import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function DefaultLayout() {
  return (
    <>
      <Header />
      <div style={{marginTop: '76px'}}>
        <Outlet />
      </div>
    </>
  );
}

export default DefaultLayout;
