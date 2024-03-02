import React from "react";

import { FaSpinner } from "react-icons/fa";

import "./TransferIng.css";

const TransferIng = () => {
  // 채우기, 보내기
  return (
    <div className="tr-ing">
      <div>
        <FaSpinner className="spinner" size={140} />
        <div>{"내 KB마이핏통장으로"}</div>
        <div>{"5,000원을"}</div>
        <div>{"채울게요"}</div>
      </div>
    </div>
  );
};

export default TransferIng;
