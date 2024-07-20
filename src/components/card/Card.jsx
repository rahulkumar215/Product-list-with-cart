import React, { useEffect, useState } from "react";
import "./Card.scss";
import AddToCartButton from "../addToCartButton/AddToCartButton";

const Card = ({ data, updateCartItems, items }) => {
  const [itemCount, setItemCount] = useState(0);

  const handleIncrement = () => setItemCount((prev) => prev + 1);
  const handleDecrement = () => setItemCount((prev) => prev - 1);

  const obj = {
    id: data.name,
    title: data.name,
    img: data.image.desktop,
    qty: itemCount,
    price: data.price,
  };

  useEffect(() => {
    updateCartItems(obj);
  }, [itemCount]);

  useEffect(() => {
    !items.some((item) => item.id === data.name) && setItemCount(0);
  }, [items]);

  return (
    <div
      className={itemCount > 0 ? "food__card food__card--active" : "food__card"}
    >
      <img src={data.image.desktop} alt="Food" className="food__card__image" />
      <AddToCartButton
        itemCount={itemCount}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <p className="food__card__category">{data.category}</p>
      <h3 className="food__card__title">{data.name}</h3>
      <h3 className="food__card__price">${data.price.toFixed(2)}</h3>
    </div>
  );
};

export default Card;
