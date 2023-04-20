import React, { useState } from "react";
import Product from "./Product";
import Title from "../Title";
import { ProductConsumer } from "../../context";
import { PRODUCT_TYPE } from "./constant";

export default function ProductList() {
  const [activeTab, setActiveTab] = useState("bongden");

  return (
    <React.Fragment>
      <Title title="Cửa hàng" />
      <div className="my-5">
        <div className="container">
          <div className="d-flex">
            {PRODUCT_TYPE.map(({ id, title, category }) => (
              <button
                key={id}
                onClick={() => setActiveTab(category)}
                className={`mx-2 px-4 ${activeTab === category ? "" : "border"} `}
              >
                {title}
              </button>
            ))}
          </div>
          <div className="row" style={{
            minHeight:"47.8vh"
          }}>
            <ProductConsumer>
              {(value) => {
                const filteredProducts = value.products.filter((product) => {
                  return product.category === activeTab;
                });
                return filteredProducts.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
