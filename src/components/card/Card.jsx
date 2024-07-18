import React, { useState } from "react";
import "./Card.scss";
import AddToCartButton from "../addToCartButton/AddToCartButton";

const Card = ({ data }) => {
  const [itemCount, setItemCount] = useState(0);

  const handleIncrement = () => {
    setItemCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setItemCount((prev) => prev - 1);
  };
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
