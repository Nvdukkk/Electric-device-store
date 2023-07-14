import React, { useRef } from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({});
  const password = useRef({});

  password.current = watch("password", "");
  const onSubmit = (inputData) => {
    console.log(inputData);
  };
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
          <div className="col-lg-5 col-md-5 col-12 ">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
              <img
                loading="lazy"
                className="w-mw767-100 w-50"
                src="../image/Login.jpg"
                alt="Đăng ký"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-12 ">
            <div className="p-3 h-100 d-flex flex-column align-items-center justify-content-evenly">
              <h3 className="fw-bold text-uppercase">Đăng ký</h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="d-flex flex-column w-75 gap-3 mt-2"
              >
                <div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Tên tài khoản..."
                    className="w-100 p-2 border-top-0 border-start-0 border-end-0 border-bottom-1 border-dark-subtle"
                    {...register("username", {
                      required: "Vui lòng nhập tên tài khoản",
                    })}
                  />
                  {errors.username && (
                    <span className="text-warning">
                      {errors.username.message}
                    </span>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Mật khẩu..."
                    className="w-100 p-2 border-top-0 border-start-0 border-end-0 border-bottom-1 border-dark-subtle"
                    {...register("password", {
                      required: "Vui lòng nhập mật khẩu",
                      minLength: {
                        value: 6,
                        message: "Mật khẩu ít nhất 6 kí tự",
                      },
                    })}
                  />
                  {errors.password && (
                    <span className="text-warning">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    name="password-confirm"
                    placeholder="Nhập lại mật khẩu..."
                    className="w-100 p-2 border-top-0 border-start-0 border-end-0 border-bottom-1 border-dark-subtle"
                    {...register("repassword", {
                      required: "Vui lòng nhập lại mật khẩu",
                      validate: (value) =>
                        value === password.current || "Mật khẩu không khớp",
                    })}
                  />
                  {errors.repassword && (
                    <span className="text-warning">
                      {errors.repassword.message}
                    </span>
                  )}
                </div>
                <button
                  className="btn btn-black mt-4 px-2 py-3 border-1 border-dark"
                  type="submit"
                >
                  Đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
