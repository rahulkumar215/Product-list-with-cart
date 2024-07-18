import React from "react";
import { Data } from "./Data";
import "./Menu.scss";
import Card from "../card/Card";

const Menu = () => {
  return (
    <>
      {Data.map((data) => (
        <Card data={data} />
      ))}

      {/* <Card data={Data[0]} /> */}
    </>
  );
};

export default Menu;
