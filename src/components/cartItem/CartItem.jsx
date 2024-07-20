import React from "react";
import "./CartItem.scss";
import { ReactComponent as TimesIcon } from "../../assets/images/icon-remove-item.svg";

const CartItem = ({ item, removeCartIcon, showImage = false }) => {
  return (
    <div className={showImage ? "cart__item img-visble" : "cart__item"}>
      {showImage && (
        <img src={item.img} alt="Food" className="cart__item-img" />
      )}
      <div className="cart__item-details">
        <div className="cart__item-details-a">
          <h3 className="heading-3">{item.title}</h3>
          <div className="cart__item-price-cont">
            <p className="item-qty">{item.qty}x</p>
            <p className="item-price">@ ${item.price.toFixed(2)}</p>
            {showImage ? (
              ""
            ) : (
              <p className="item-total">
                ${Number(item.qty * item.price).toFixed(2)}
              </p>
            )}
          </div>
        </div>
        <div className="cart__item-details-b">
          {showImage ? (
            <p className="item-total">
              ${Number(item.qty * item.price).toFixed(2)}
            </p>
          ) : (
            <button
              className="cart__item-del-btn"
              onClick={() => removeCartIcon(item.id)}
            >
              <TimesIcon className="del-icon" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
