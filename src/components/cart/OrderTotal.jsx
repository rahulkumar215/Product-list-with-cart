import React from "react";

const OrderTotal = ({ total }) => {
  return (
    <>
      <div className="order">
        <p className="order__p">Order Total</p>
        <h2 className="heading-2">${total.toFixed(2)}</h2>
      </div>
    </>
  );
};

export default OrderTotal;
