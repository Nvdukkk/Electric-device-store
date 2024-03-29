import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ProductConsumer, ProductContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export default function Checkout() {
  const navigate = useNavigate();

  const context = useContext(ProductContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  let cartData = { title: "", count: "" };

  const onSubmit = (inputData) => {
    context.setIsAllowed(true);
    reset();

    const mergeData = Object.assign({}, inputData, cartData);

    axios.post(
      "https://sheet.best/api/sheets/05109e90-cb9f-4ed3-ab12-b3ab4af760ad",
      mergeData
    );
    context.clearCart();
    navigate("/order-success");
  };
  return (
    <ProductConsumer>
      {(value) => {
        const { cart } = value;

        for (let i = 0; i < cart.length; i++) {
          cartData.title += cart[i].title;
          cartData.count += cart[i].count;

          if (i < cart.length - 1) {
            cartData.title += " ; ";
            cartData.count += " ; ";
          }
        }
        return (
          <div
            className="d-flex justify-content-center align-items-center w-100"
            style={{
              minHeight: "100vh",
              backgroundImage: 'url("../image/checkout-background.webp")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container h-75">
              <div className="row h-100 bg-white">
                <div
                  className="col-lg-6 col-md-6 col-12 "
                  style={{
                    backgroundColor: "var(--mainYellow)",
                  }}
                >
                  <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                    <img
                      loading="lazy"
                      className="w-50"
                      src="../image/checkout.png"
                      alt="Thanh toán"
                      style={{
                        transform: "rotateY(180deg)",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 ">
                  <div className="p-3 h-100 d-flex flex-column align-items-center justify-content-evenly">
                    <h3 className="fw-bold text-uppercase">Đặt hàng</h3>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="d-flex flex-column w-75 gap-3"
                    >
                      <div>
                        <input
                          type="text"
                          name="fullname"
                          placeholder="Họ tên..."
                          className="w-100 p-2 border-top-0 border-start-0 border-end-0 border-bottom-1 border-dark-subtle"
                          {...register("name", {
                            required: "Vui lòng nhập họ tên",
                          })}
                        />
                        {errors.name && (
                          <span className="text-warning">
                            {errors.name.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <input
                          type="text"
                          name="address"
                          placeholder="Địa chỉ..."
                          className="w-100 p-2 border-top-0 border-start-0 border-end-0 border-bottom-1 border-dark-subtle"
                          {...register("address", {
                            required: "Vui lòng nhập địa chỉ",
                          })}
                        />
                        {errors.address && (
                          <span className="text-warning">
                            {errors.address.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <input
                          type="text"
                          name="number"
                          placeholder="Số điện thoại..."
                          className="w-100 p-2 border-top-0 border-start-0 border-end-0 border-bottom-1 border-dark-subtle"
                          {...register("number", {
                            required: "Vui lòng nhập số điện thoại",
                            minLength: {
                              value: 10,
                              message:
                                "Vui lòng nhập định dạng số điện thoại 10 số",
                            },
                            pattern: {
                              value: /(0[3|5|7|8|9])+([0-9]{8})\b/g,
                              message: "Vui lòng kiểm tra lại số điện thoại",
                            },
                          })}
                        />
                        {errors.number && (
                          <span className="text-warning">
                            {errors.number.message}
                          </span>
                        )}
                      </div>
                      <button
                        className="btn btn-black mt-5 px-2 py-3 border-1 border-dark"
                        type="submit"
                      >
                        Thanh toán khi nhận hàng
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
