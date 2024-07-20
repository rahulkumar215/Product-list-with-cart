import React from "react";
import { ReactComponent as TreeIcon } from "../../assets/images/icon-carbon-neutral.svg";

const CarboxNutral = () => {
  return (
    <div className="carbon__neutral">
      <TreeIcon className="carbon__neutral-icon" />
      <p className="carbon__neutral-p">
        This is a{" "}
        <span className="carbon__neutral-p--bold">carbox-neutral</span> delivery
      </p>
    </div>
  );
};

export default CarboxNutral;
