import React from "react";

import "./SubButton.css";

const SubButton = ({ text, addClass, handleClick }) => {
  return (
    <div className={"SubButton " + addClass} onClick={() => handleClick()}>
      {text}
    </div>
  );
};

export default SubButton;
