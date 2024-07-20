import React from "react";
import { Data } from "./Data";
import "./Menu.scss";
import Card from "../card/Card";

const Menu = ({ updateCartItems, items }) => {
  return (
    <>
      {Data.map((data, i) => (
        <Card
          data={data}
          key={i}
          updateCartItems={updateCartItems}
          items={items}
        />
      ))}
    </>
  );
};

export default Menu;
