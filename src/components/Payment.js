import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ProductConsumer } from "../context";
function Payment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  let cartData = { title: "", count: "" };

  const onSubmit = (inputData) => {
    const mergeData = Object.assign({}, inputData, cartData);

    axios.post(
      "https://sheet.best/api/sheets/eb5ec9af-83b0-431b-8f6d-75ba9973d95a",
      mergeData
    );
    alert("Đặt hàng thành công");
    reset();
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
            className="d-flex justify-content-center align-items-center"
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundImage:
                'url("https://images.unsplash.com/photo-1635151227785-429f420c6b9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="container"
              style={{
                height: "70%",
                marginTop: "100px",
              }}
            >
              <div className="row h-100 bg-white">
                <div
                  className="col-lg-6 col-md-6 col-12 "
                  style={{
                    backgroundColor: "var(--mainYellow)",
                  }}
                >
                  <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                    <img
                      className="w-50"
                      src="https://cdn-icons-png.flaticon.com/512/4952/4952984.png"
                      alt="Thanh toán"
                      style={{
                        transform: "rotateY(180deg)",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 ">
                  <div className="p-3 h-100 d-flex flex-column align-items-center justify-content-evenly">
                    <h3
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "700",
                      }}
                    >
                      Đặt hàng
                    </h3>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="d-flex flex-column"
                      style={{
                        gap: "15px",
                        width: "80%",
                      }}
                    >
                      <div className="">
                        <input
                          type="text"
                          name="fullname"
                          placeholder="Họ tên..."
                          className="w-100"
                          style={{
                            padding: "10px",
                            border: "none",
                            borderBottom: "1px solid #bbb",
                            outline: "none",
                          }}
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
                      <div className="">
                        <input
                          type="text"
                          name="address"
                          placeholder="Địa chỉ..."
                          className="w-100"
                          style={{
                            padding: "10px",
                            border: "none",
                            borderBottom: "1px solid #bbb",
                            outline: "none",
                          }}
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
                      <div className="">
                        <input
                          type="text"
                          name="number"
                          placeholder="Số điện thoại..."
                          className="w-100"
                          style={{
                            padding: "10px",
                            border: "none",
                            borderBottom: "1px solid #bbb",
                            outline: "none",
                          }}
                          {...register("number", {
                            required: "Vui lòng nhập số điện thoại",
                            minLength: {
                              value: 10,
                              message:
                                "Vui lòng nhập định dạng số điện thoại 10 số",
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
                        className="btn"
                        type="submit"
                        style={{
                          border: "1px solid #000",
                          marginTop: "30px",
                          padding: "10px 20px",
                        }}
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

export default Payment;
