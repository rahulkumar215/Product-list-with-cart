import React from "react";
import "./Card.scss";
import AddToCartButton from "../addToCartButton/AddToCartButton";

const Card = ({ data }) => {
  console.log(data.image.desktop);
  return (
    <div className="food__card">
      <img
        src={data.image.desktop}
        alt="Food Image"
        className="food__card__image"
      />
      <p className="food__card__category">{data.category}</p>
      <h3 className="food__card__title">{data.name}</h3>
      <h3 className="food__card__price">${data.price.toFixed(2)}</h3>
      <AddToCartButton />
    </div>
  );
};

export default Card;
