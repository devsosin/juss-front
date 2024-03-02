import React from "react";

import "./TransferConfirm.css";

import BaseButton from "../Button/BaseButton";

import { won } from "../../utils/currency";

const TransferConfirm = ({ fromAccount, toAccount, amount, sendMoney }) => {
  return (
    <div className="tr-confirm">
      <div>
        <div>
          <span className="highlight">{toAccount.accountName}</span>님에게
        </div>
        <div>{won(amount)}을</div>
        <div>보낼까요?</div>
      </div>
      <div className="tr-info">
        <div>
          <div>받는 분에게 표시</div> <div>{"최재진"}</div>
        </div>
        <div>
          <div>출금 계좌</div> <div>{`내 ${fromAccount.accountName}`}</div>
        </div>
        <div>
          <div>
            {toAccount.accountType === "account"
              ? "입금 계좌"
              : "입금할 연락처"}
          </div>
          <div>{`${toAccount.bankName} ${toAccount.accountNumber}`}</div>
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
