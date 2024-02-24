import React from "react";

import "./Balance.css";

import { won } from "../../utils/currency";

const Balance = ({ isSend, amount, balance }) => {
  return (
    <div className="card-balance">
      <div className={isSend ? "send" : "recv"}>
        {/* isSend */}
        {(isSend ? "-" : "") + won(amount)}
      </div>
      <div>{won(balance)}</div>
    </div>
  );
};

export default Balance;
