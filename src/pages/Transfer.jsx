import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

import Keypad from "../components/Keypad/Keypad";
import TransferConfirm from "../components/Transfer/TransferConfirm";
import TransferIng from "../components/Transfer/TransferIng";
import TransferComplete from "../components/Transfer/TransferComplete";

import "./Transfer.css";

import { won } from "../utils/currency";
import Modal from "../components/Modal/Modal";

import { getAccount } from "../api/account";
import { transferMoney } from "../api/transfer";

const Transfer = () => {
  const navigate = useNavigate();
  const { fromId, toId } = useParams();
  const [fromAccount, setFromAccount] = useState({});
  const [toAccount, setToAccount] = useState({});

  const [amount, setAmount] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [showIng, setShowIng] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  useEffect(() => {
    getAccount({
      token: localStorage.getItem("jwt-token"),
      accountId: fromId,
    }).then((data) => setFromAccount(data));
  }, [fromId]);

  useEffect(() => {
    getAccount({
      token: localStorage.getItem("jwt-token"),
      accountId: toId,
    }).then((data) => setToAccount(data));
  }, [toId]);

  const changeAmount = (v) => {
    let res = amount.replace(/\D/g, "");
    const value =
      v.type?.name === "FaArrowLeft"
        ? res.slice(0, res.length - 1)
        : res + v.toString();

    setAmount(won(value));
  };

  // 팝업으로 띄우기?
  const showConfirmModal = () => {
    let res = parseInt(amount.replace(/\D/g, ""));
    if (0 < res && res <= fromAccount.balance) {
      setShowConfirm(true);
    } else {
      alert(`금액은 0 ~ ${won(fromAccount.balance)} 사이로 입력해주세요.`);
    }
  };

  const sendMoney = () => {
    setShowConfirm(false);
    setShowIng(true);

    transferMoney({
      token: localStorage.getItem("jwt-token"),
      body: {
        sender_id: fromAccount.id,
        receiver_id: toAccount.id,
        amount: parseInt(amount.replace(/\D/g, "")),
        memo: "",
      },
    }).then(() => {
      setTimeout(() => {
        setShowComplete(true);
        setShowIng(false);
      }, 1000);
    });
  };

  return (
    <div>
      <div className="top-nav">
        <div>
          <Link onClick={() => navigate(-1)}>
            <FaArrowLeft size={24} />
          </Link>
        </div>
      </div>

      <div className="transfer-info">
        <div className="transfer-from">
          <div>
            <span>{`내 ${fromAccount.account_name}`}</span>에서
          </div>
          <div className="balance-text">{`잔액 ${won(
            fromAccount.balance
          )}`}</div>
        </div>

        <div className="transfer-to">
          <div>
            <span>
              {`${toAccount.is_own ? "내 " : ""}` + toAccount.account_name}
            </span>
            {`${toAccount.is_own ? "으로" : "님에게"}`}
          </div>
          <div>{`${toAccount.bank_name} ${toAccount.account_number}`}</div>
        </div>
      </div>

      <div className="transfer-amount">
        <input
          type="text"
          value={amount ? amount : ""}
          placeholder={`얼마나 ${toAccount.is_own ? "채울" : "보낼"}까요?`}
        />
      </div>

      <div className="transfer-balance">
        <button
          className="balance-btn"
          onClick={() => setAmount(won(fromAccount.balance))}
        >
          {`잔액 · ${won(fromAccount.balance)} 입력`}
        </button>
      </div>

      <div className="absolute-box">
        <div
          className={`next-btn ${amount ? "show" : "hide"}`}
          onClick={() => showConfirmModal()}
        >
          다음
        </div>

        <Keypad setValue={changeAmount} />
      </div>

      {showConfirm ? (
        <Modal>
          <TransferConfirm
            fromAccount={fromAccount}
            toAccount={toAccount}
            isFill={toAccount.is_own}
            amount={parseInt(amount.replace(/\D/g, ""))}
            sendMoney={sendMoney}
          />
        </Modal>
      ) : (
        ""
      )}

      {showIng ? (
        <Modal>
          <TransferIng
            fromAccount={fromAccount}
            toAccount={toAccount}
            isFill={toAccount.is_own}
            amount={parseInt(amount.replace(/\D/g, ""))}
          />
        </Modal>
      ) : (
        ""
      )}
      {showComplete ? (
        <Modal>
          <TransferComplete
            fromAccount={fromAccount}
            toAccount={toAccount}
            isFill={toAccount.is_own}
            amount={parseInt(amount.replace(/\D/g, ""))}
          />
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Transfer;
