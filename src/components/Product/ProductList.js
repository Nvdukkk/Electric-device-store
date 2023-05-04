import React, { useState } from "react";
import Product from "./Product";
import Title from "../Title";
import { ProductConsumer } from "../../context";
import { PRODUCT_CATEGORY } from "./constant";
import Slider from "react-slick";
import "./CustomDots.css";
import ProductModal from "./ProductModal";

export default function ProductList() {
  const [activeTab, setActiveTab] = useState("bongden");

  const settingSlider = {
    infinite: true,
    slidesToShow: 7,
    arrows: false,
    dots: true,
    customPaging: function (i) {
      return <h6>{i + 1}</h6>;
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <Title title="Cửa hàng" />
      <div className="my-5">
        <div className="container">
          <Slider className="pb-4" {...settingSlider}>
            {PRODUCT_CATEGORY.map(({ title, category }, index) => (
              <div key={index} className="d-flex justify-content-center">
                <button
                  onClick={() => setActiveTab(category)}
                  className={`py-2 px-2 ${
                    activeTab === category ? "" : "border"
                  } `}
                  style={{ width: "150px", height: "70px" }}
                >
                  {title}
                </button>
              </div>
            ))}
          </Slider>
          <div
            className="row mt-5 border-top border-2 border-dark border-solid border-xl-0"
            style={{
              minHeight: "50vh",
            }}
          >
            <ProductConsumer>
              {(value) => {
                const filteredProducts = value.products.filter((product) => {
                  return product.category === activeTab;
                });
                return filteredProducts.map((product) => (
                  <Product key={product.id} product={product} />
                ));
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
      <ProductModal />
    </>
  );
}
