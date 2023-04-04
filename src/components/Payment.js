import React from "react";
import { useForm } from "react-hook-form";
function Payment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h3>Đặt hàng</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <input
            type="text"
            name="fullname"
            placeholder="Họ tên..."
            className=""
            {...register("name", { required: "Vui lòng nhập họ tên" })}
          />
          {errors.name && (
            <span className="text-warning">{errors.name.message}</span>
          )}
        </div>
        <div className="">
          <input
            type="text"
            name="address"
            placeholder="Địa chỉ..."
            className=""
            {...register("address", { required: "Vui lòng nhập địa chỉ" })}
          />
          {errors.address && (
            <span className="text-warning">{errors.address.message}</span>
          )}
        </div>
        <div className="">
          <input
            type="text"
            name="number"
            placeholder="Số điện thoại..."
            className=""
            {...register("number", {
              required: "Vui lòng nhập số điện thoại",
              minLength: {
                value: 10,
                message: "Vui lòng nhập định dạng số điện thoại 10 số",
              },
            })}
          />
          {errors.number && (
            <span className="text-warning">{errors.number.message}</span>
          )}
        </div>
        <button type="submit">Thanh toán trực tuyến</button>
        <button type="submit">Thanh toán khi nhận hàng</button>
      </form>
    </div>
  );
}

export default Payment;
