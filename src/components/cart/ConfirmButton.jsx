import React from "react";

const ConfirmButton = ({ stopScroll }) => {
  const stopBodyScoll = () => {
    stopScroll(true);
    document.body.classList.add("lock");
  };

  return (
    <button className="btn-confirm" onClick={() => stopBodyScoll()}>
      Confim Order
    </button>
  );
};

export default ConfirmButton;
