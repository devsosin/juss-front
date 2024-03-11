import React from "react";

import "./SecondCard.css";

const SecondCard = ({ title, subTitle, icon, Child, handleClick }) => {
  return (
    <div
      className="Card-second"
      onClick={(e) => {
        return e.target === e.currentTarget ||
          e.target.parentElement.parentElement.parentElement === e.currentTarget
          ? handleClick
            ? handleClick()
            : null
          : null;
      }}
    >
      <div className="left">
        <div>{icon}</div>
        <div>
          <div className="card-title">{title}</div>
          <div className="card-sub">{subTitle}</div>
        </div>
      </div>
      <div className="right">{Child}</div>
    </div>
  );
};

export default SecondCard;
