import React from "react";
import "./CartItem.scss";
import { ReactComponent as TimesIcon } from "../../assets/images/icon-remove-item.svg";

const CartItem = ({ item }) => {
  return (
    <div className="cart__item">
      <div className="cart__item-details">
        <h3 className="heading-3">{item.title}</h3>
        <div className="cart__item-price-cont">
          <p className="item-qty">{item.qty}x</p>
          <p className="item-price">@ ${item.price.toFixed(2)}</p>
          <p className="item-total">
            ${Number(item.qty * item.price).toFixed(2)}
          </p>
        </div>
      </div>
      <button className="cart__item-del-btn">
        <TimesIcon className="del-icon" />
      </button>
    </div>
  );
};

export default CartItem;
