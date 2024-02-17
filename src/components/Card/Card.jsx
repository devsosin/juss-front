import React from "react";

import "./Card.css";

const Card = ({ title, subTitle, icon, Child }) => {
  return (
    <div className="Card">
      <div>{icon}</div>
      <div>
        <div className="cardTitle">{title}</div>
        <div className="cardSub">{subTitle}</div>
      </div>
      {Child ? <Child /> : null}
    </div>
  );
};

export default Card;
