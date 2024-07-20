import React from "react";

const ConfirmButton = ({
  stopScroll,
  children,
  resetState,
  showImage = false,
}) => {
  const handleClick = () => {
    if (showImage) {
      resetState();
    } else {
      stopScroll(true);
      document.body.classList.add("lock");
    }
  };

  return (
    <button className="btn-confirm" onClick={() => handleClick()}>
      {children}
    </button>
  );
};

export default ConfirmButton;
