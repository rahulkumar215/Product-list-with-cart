import React from "react";
import { ReactComponent as EmptyIcon } from "../../assets/images/illustration-empty-cart.svg";

const EmptyCart = () => {
  return (
    <div className="empty__cart">
      <EmptyIcon className="empty__cart-icon" />
      <p className="empty__cart-text">Your added items will appear here</p>
    </div>
  );
};

export default EmptyCart;
