import React from "react";
import { ReactComponent as ConfirmIcon } from "../../assets/images/icon-order-confirmed.svg";
import "./OrderConfirm.scss";
import ConfirmButton from "../cart/ConfirmButton";
import CartItem from "../cartItem/CartItem";
import OrderTotal from "../cart/OrderTotal";

const OrderConfirm = ({ items, total, resetState }) => {
  return (
    <div className="order__confirmed">
      <ConfirmIcon className="order__confirmed-icon" />
      <h1 className="heading-h1">Order Confirmed</h1>
      <p className="order__confirmed-p">We hope you enjoy your food!</p>
      <div className="order__confirmed-items">
        {items.map((item, i) => (
          <CartItem item={item} key={i} showImage={true} />
        ))}
        <div className="order__confirmed-total">
          <OrderTotal total={total} />
        </div>
      </div>
      <ConfirmButton resetState={resetState} showImage={true}>
        Start New Order
      </ConfirmButton>
    </div>
  );
};

export default OrderConfirm;
