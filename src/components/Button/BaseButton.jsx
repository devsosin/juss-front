import React from "react";

import "./BaseButton.css";

const BaseButton = ({ text, addClass, handleClick }) => {
  return (
    <div className={"BaseButton " + addClass} onClick={() => handleClick()}>
      {text}
    </div>
  );
};

export default BaseButton;
