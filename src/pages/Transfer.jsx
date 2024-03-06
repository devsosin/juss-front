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
    // 가져오기?
    setFromAccount({
      id: "lksdjflaskdf",
      balance: 93305,
      accountName: "KB마이핏통장",
      bankName: "KB국민",
      accountNumber: "70100200140450",
      userId: 0,
    });
    setToAccount({
      id: "",
      accountName: "최재진(소신)",
      bankName: "KB국민",
      accountNumber: "283501-04-539502",
      accountType: 0,
      userId: 0,
    });
  }, [fromId, toId]);

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
    // show ing
    // finished -> complete
    setShowConfirm(false);
    setShowIng(true);
    // send data
    setTimeout(() => {
      setShowComplete(true);
      setShowIng(false);
    }, 7000);
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
            <span>{`내 ${fromAccount.accountName}`}</span>에서
          </div>
          <div>{`잔액 ${won(fromAccount.balance)}`}</div>
        </div>

        <div className="transfer-to">
          <div>
            <span>{`${toAccount.accountName}`}</span>님에게
          </div>
          <div>{`${toAccount.bankName} ${toAccount.accountNumber}`}</div>
        </div>
      </div>

      <div className="transfer-amount">
        <input
          type="text"
          value={amount ? amount : ""}
          placeholder="얼마나 보낼까요?"
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
            isFill={fromAccount.userId === toAccount.userId}
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
            isFill={fromAccount.userId === toAccount.userId}
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
            isFill={fromAccount.userId === toAccount.userId}
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
