import React from "react";
import "./AddToCartButton.scss";
import { ReactComponent as CartIcon } from "../../assets/images/icon-add-to-cart.svg";

const addToCartButton = () => {
  return (
    <button className="food__card__btn-cart">
      <CartIcon className="cart-icon" />
      Add to Cart
    </button>
  );
};

export default addToCartButton;
