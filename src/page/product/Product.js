import React, { useRef, useState } from "react";
import ProductList from "../../components/Product/ProductList";
import Title from "../../components/Title";
import { ProductConsumer } from "../../context";
import { PRODUCT_CATEGORY } from "../../constant/product";
import Slider from "react-slick";
import "../../styles/CustomSlick.css"
import ProductModal from "../../components/Product/ProductModal";
import InputSearch from "../../components/InputSearch";
import { removeVietnameseTones } from "../../utils";

export default function Product() {
  const [activeTab, setActiveTab] = useState("bongden");
  const [search, setSeacrh] = useState("");
  const slider = useRef(null);
  const settingProductSlider = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
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
            <i className="fa-solid fa-arrow-left" />
          </div>
          {dots}
          <div
            id="slick-next-btn"
            className="p-2 ms-5 bg-body-secondary rounded-circle "
            onClick={() => slider.current.slickNext()}
          >
            <i className="fa-solid fa-arrow-right" />
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
          <div className="pb-4 mb-4 d-flex overflow-x-scroll">
            {PRODUCT_CATEGORY.map(({ title, category }, index) => (
              <div key={index} className="px-2 d-flex justify-content-center">
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
          <InputSearch
            label=<i className="fa-solid fa-magnifying-glass" />
            name="search-product"
            placeholder="Tìm kiếm tên sản phẩm"
            onChange={(e) => setSeacrh(e.target.value)}
          />
          <ProductConsumer>
            {(value) => {
              const filteredProducts = value.products.filter((product) => {
                return product.category === activeTab;
              });
              const searchProducts = filteredProducts.filter((product) => {
                return removeVietnameseTones(product.title).includes(
                  removeVietnameseTones(search)
                );
              });
              return (
                <Slider
                  {...settingProductSlider}
                  ref={slider}
                  infinite={searchProducts.length > 12}
                  className="pb-5"
                  rows={
                    searchProducts.length <= 4
                      ? 1
                      : searchProducts.length <= 8
                      ? 2
                      : 3
                  }
                >
                  {searchProducts.map((product) => (
                    <div className="px-1 px-md-2 mt-2 mt-md-3" key={product.id}>
                      <ProductList product={product} />
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
