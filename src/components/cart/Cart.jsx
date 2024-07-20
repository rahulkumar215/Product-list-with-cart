import React from "react";
import CartItem from "../cartItem/CartItem";
import "./Cart.scss";
import OrderTotal from "./OrderTotal";
import CarboxNutral from "./CarboxNutral";
import EmptyCart from "./EmptyCart";
import ConfirmButton from "./ConfirmButton";

const Cart = ({ items, removeCartIcon, stopScroll }) => {
  const total = items.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <div className="food__cart">
      <h2 className="heading-2 mb-0-9">Your Cart ({items.length})</h2>
      <div className="food__cart-items">
        {items.length > 0 ? (
          <>
            {items.map((item, i) => (
              <CartItem item={item} key={i} removeCartIcon={removeCartIcon} />
            ))}
            <OrderTotal total={total} />
            <CarboxNutral />
            <ConfirmButton stopScroll={stopScroll} />
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
};

export default Cart;
