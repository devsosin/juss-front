import React from "react";

import "./TransferConfirm.css";

import BaseButton from "../Button/BaseButton";

import { won } from "../../utils/currency";

const TransferConfirm = ({
  fromAccount,
  toAccount,
  isFill,
  amount,
  sendMoney,
}) => {
  return (
    <div className="tr-confirm">
      <div>
        <div>
          <span className="highlight">
            {`${isFill ? "내 " : ""}`}
            {toAccount.account_name}
          </span>
          {`${isFill ? "으로" : "님에게"}`}
        </div>
        <div>{won(amount)}을</div>
        <div>{`${isFill ? "채울" : "보낼"}까요?`}</div>
      </div>
      <div className="tr-info">
        <div>
          {/* 게좌 예금주 */}
          <div>받는 분에게 표시</div> <div>{""}</div>
        </div>
        <div>
          <div>출금 계좌</div> <div>{`내 ${fromAccount.account_name}`}</div>
        </div>
        <div>
          <div>
            {toAccount.account_type === 2 ? "입금할 연락처" : "입금 계좌"}
          </div>
          <div>{`${toAccount.bank_name} ${toAccount.account_number}`}</div>
        </div>
        <div>
          <BaseButton
            text={"보내기"}
            addClass={"send-btn"}
            handleClick={() => sendMoney()}
          />
        </div>
        <div>평생 수수료 무료</div>
      </div>
    </div>
  );
};

export default TransferConfirm;
