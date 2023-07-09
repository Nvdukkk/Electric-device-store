import React, { useRef, useState } from "react";
import Product from "./Product";
import Title from "../Title";
import { ProductConsumer } from "../../context";
import { PRODUCT_CATEGORY } from "./constant";
import Slider from "react-slick";
import "./CustomSlick.css";
import ProductModal from "./ProductModal";

export default function ProductList() {
  const [activeTab, setActiveTab] = useState("bongden");
  const slider = useRef(null);
  const settingProductSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    rows: 3,
    customPaging: function (i) {
      return <h6>{i + 1}</h6>;
    },
    appendDots: (dots) => (
      <div>
        <ul className="align-items-center d-flex justify-content-center">
          <div
            onClick={() => slider.current.slickPrev()}
            id="slick-prev-btn"
            className="p-2 me-5 bg-body-secondary rounded-circle"
          >
            <i class="fa-solid fa-arrow-left" />
          </div>
          {dots}
          <div
            id="slick-next-btn"
            className="p-2 ms-5 bg-body-secondary rounded-circle "
            onClick={() => slider.current.slickNext()}
          >
            <i class="fa-solid fa-arrow-right" />
          </div>
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
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
          <div className="pb-4 mb-4 d-flex overflow-x-scroll" >
            {PRODUCT_CATEGORY.map(({ title, category }, index) => (
              <div key={index} className=" px-2 d-flex justify-content-center">
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
          </div>

          <ProductConsumer>
            {(value) => {
              const filteredProducts = value.products.filter((product) => {
                return product.category === activeTab;
              });
              return (
                <Slider {...settingProductSlider} ref={slider} className="pb-5">
                  {filteredProducts.map((product) => (
                    <div className="px-1 px-md-2 mt-2 mt-md-3">
                      <Product key={product.id} product={product} />
                    </div>
                  ))}
                </Slider>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
      <ProductModal />
    </>
  );
}
