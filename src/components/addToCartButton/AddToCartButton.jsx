import React from "react";
import "./AddToCartButton.scss";
import { ReactComponent as CartIcon } from "../../assets/images/icon-add-to-cart.svg";
import { ReactComponent as PlusIcon } from "../../assets/images/icon-increment-quantity.svg";
import { ReactComponent as MinusIcon } from "../../assets/images/icon-decrement-quantity.svg";

const AddToCartButton = ({ itemCount, handleIncrement, handleDecrement }) => {
  return (
    <button className="food__card__btn">
      {itemCount > 0 ? (
        <>
          <span className="icon" onClick={handleDecrement}>
            <MinusIcon className="active-icon" />
          </span>
          <p>{itemCount}</p>
          <span className="icon" onClick={handleIncrement}>
            <PlusIcon className="active-icon" />
          </span>
        </>
      ) : (
        <span className="food__card__btn-cart" onClick={handleIncrement}>
          <CartIcon className="cart-icon" />
          Add to Cart
        </span>
      )}
    </button>
  );
};

export default AddToCartButton;
