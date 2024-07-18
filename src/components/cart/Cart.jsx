import React from "react";
import "./Cart.scss";
import { ReactComponent as EmptyIcon } from "../../assets/images/illustration-empty-cart.svg";
import { ReactComponent as TreeIcon } from "../../assets/images/icon-carbon-neutral.svg";
import CartItem from "../cartItem/CartItem";

const Cart = ({ items }) => {
  let total = 0;
  items.map((item) => item.qty * item.price).forEach((item) => (total += item));

  console.log(total);

  return (
    <div className="food__cart">
      <h2 className="heading-2 mb-0-9">Your Cart (0)</h2>
      <div className="food__cart-items">
        {items.length > 0 ? (
          <>
            {items.map((item, i) => (
              <CartItem item={item} key={i} />
            ))}
            <div className="order">
              <p className="order__p">Order Total</p>
              <h2 className="heading-2">${total.toFixed(2)}</h2>
            </div>
            <div className="carbon__neutral">
              <TreeIcon className="carbon__neutral-icon" />
              <p className="carbon__neutral-p">
                This is a{" "}
                <span className="carbon__neutral-p--bold">carbox-neutral</span>{" "}
                delivery
              </p>
            </div>
            <button className="btn-confirm">Confim Order</button>
          </>
        ) : (
          <>
            <div className="empty__cart">
              <EmptyIcon className="empty__cart-icon" />
              <p className="empty__cart-text">
                Your added items will appear here
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
