import React from "react";
import { ReactComponent as ConfirmIcon } from "../../assets/images/icon-order-confirmed.svg";

const OrderConfirm = () => {
  return (
    <div className="order__confirmed">
      <ConfirmIcon className="order__confirmed-icon" />
      <h1 className="heading-h1">Order Confirmed</h1>
      <p className="order__confirmed-p">We hope you enjoy your food.</p>
    </div>
  );
};

export default OrderConfirm;
