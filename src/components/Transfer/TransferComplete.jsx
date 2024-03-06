import React from "react";
import { useNavigate } from "react-router-dom";

import { FaFlagCheckered } from "react-icons/fa";

import BaseButton from "../Button/BaseButton";
import SubButton from "../Button/SubButton";

import { won } from "../../utils/currency";

import "./TransferComplete.css";

const TransferComplete = ({ fromAccount, toAccount, isFill, amount }) => {
  const navigate = useNavigate();

  return (
    <div className="tr-complete">
      <div>
        <FaFlagCheckered size={140} />
        <div>
          <div>{`${isFill ? "내 " : ""} ${toAccount.accountName} ${
            isFill ? "로" : "님에게"
          }`}</div>
          <div>{won(amount)}을</div>
          <div>{`${isFill ? "채웠" : "보냈"}어요`}</div>
        </div>
        <div>
          <SubButton text={"메모 남기기"} addClass={"memo-btn"} />
        </div>
      </div>
      <div className="tr-finish">
        <div>
          <BaseButton
            text={"공유하기"}
            addClass={"btn-subcolor"}
            handleClick={() => alert("공유")}
          />
          <BaseButton
            text={"확인"}
            handleClick={() => navigate(`/account/${fromAccount.id}`)}
          />
        </div>
        <div>수수료는 주스가 냈어요!</div>
      </div>
    </div>
  );
};

export default TransferComplete;
