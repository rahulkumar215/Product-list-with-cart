import React from "react";
import { Data } from "./Data";
import "./Menu.scss";
import Card from "../card/Card";

const Menu = () => {
  return (
    <>
      {Data.map((data, i) => (
        <Card data={data} key={i} />
      ))}
    </>
  );
};

export default Menu;
