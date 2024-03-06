import React from "react";

import "./Card.css";

const Card = ({ title, subTitle, icon, Child, handleClick }) => {
  return (
    <div className="Card" onClick={() => (handleClick ? handleClick() : null)}>
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

export default Card;
