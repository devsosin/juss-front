import React from "react";

import { FaSpinner } from "react-icons/fa";

import "./TransferIng.css";

import { won } from "../../utils/currency";

const TransferIng = ({ toAccount, isFill, amount }) => {
  // 채우기, 보내기
  return (
    <div className="tr-ing">
      <div>
        <FaSpinner className="spinner" size={140} />
        <div>{`${isFill ? "내 " : ""}${toAccount.accountName}으로`}</div>
        <div>{`${won(amount)}을`}</div>
        <div>{`${isFill ? "채울" : "보낼"}게요`}</div>
      </div>
    </div>
  );
};

export default TransferIng;
