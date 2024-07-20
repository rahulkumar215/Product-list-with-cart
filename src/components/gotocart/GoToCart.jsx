import React, { useRef, useState } from "react";
import "./GoToCart.scss";
import { ReactComponent as CartIcon } from "../../assets/images/icon-add-to-cart.svg";
import useOnScreen from "./useOnScreen";

const GoToCart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const height = document.querySelector("#root").scrollHeight;
  //   const ref = useRef();

  window.addEventListener("scroll", function () {
    if (this.scrollY + 800 <= height - 200) setIsVisible(false);
    else setIsVisible(false);
  });

  return (
    <div className={!isVisible ? "gotocart__cont" : "gotocart__cont hidden"}>
      <CartIcon className="gotocart__icon" />
    </div>
  );
};

export default GoToCart;
