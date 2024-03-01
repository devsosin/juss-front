import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaAngleDown } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { CopyToClipboard } from "react-copy-to-clipboard/src";

import SecondCard from "../components/Card/SecondCard";
import BaseButton from "../components/Button/BaseButton";
import Modal from "../components/Modal/Modal";
import Deposit from "../components/Deposit/Deposit";

import { won } from "../utils/currency";

import "./Account.css";
import Balance from "../components/Card/Balance";

const Account = ({ id }) => {
  const navigate = useNavigate();
  const [showDeposit, setShowDeposit] = useState(false);

  const account = {
    id: "lksdjflaskdf",
    balance: 93305,
    accountName: "KB마이핏통장",
    bankName: "KB국민",
    accountNumber: "70100200140450",
  };

  const transactions = [
    {
      date: "20240127", // 구성 어떻게?
      trs: [
        {
          id: "aosijdf",
          memo: "617 계좌개설",
          balance: 93305,
          amount: 1,
          isSend: false, // receiver, send 조회
          createdAt: new Date(),
        },
        {
          id: "aosijdfasjc",
          memo: "KB카드출금",
          balance: 93304,
          amount: 121700,
          isSend: true, // receiver, send 조회
          createdAt: new Date(),
        },
      ],
    },
  ];

  const isLoading = false;

  console.log(id);
  return (
    <div className="Account">
      <div className="top-nav">
        <div>
          <Link onClick={() => navigate(-1)}>
            <FaArrowLeft size={24} />
          </Link>
          <span>KB마이핏통장</span>
        </div>
        <button>관리</button>
      </div>

      <div className="account-info">
        <div>
          {/* 이부분 좀 더 간단하게 구현 안되나 -> Toast 띄우기 */}
          <CopyToClipboard
            text={`${account.bankName} ${account.accountNumber}`}
          >
            <text style={{ textDecoration: "underline", marginRight: ".5rem" }}>
              {account.bankName} {account.accountNumber}
            </text>
          </CopyToClipboard>
          <CopyToClipboard
            text={`${account.bankName} ${account.accountNumber}`}
          >
            <IoCopyOutline size={12} />
          </CopyToClipboard>
          <CopyToClipboard
            text={`${account.bankName} ${account.accountNumber}`}
          >
            <text style={{ fontSize: "10px", marginLeft: ".25rem" }}>복사</text>
          </CopyToClipboard>
        </div>

        <div>
          <span>{won(account.balance)}</span>
        </div>
      </div>

      <div className="account-btns">
        <BaseButton
          text={"채우기"}
          // 여기서는 채우기 팝업창이 떠야함
          handleClick={() => setShowDeposit(true)}
        />
        <BaseButton
          text={"보내기"}
          handleClick={() => navigate(`/withdraw/${account.id}`)}
        />
      </div>

      <div className="account-transaction">
        {/* 전체, 입금, 출금 */}
        <div className="tr-state">
          <div>
            전체 <FaAngleDown size={12} />
          </div>
          <div>{isLoading ? "불러오는 중" : "불러오기 완료"}</div>
          {/* 원 도는 거, 체크표시 */}
        </div>

        {/* 반복문 시작 */}
        {transactions.map(({ date, trs }) => {
          return (
            <>
              <div className="tr-date" key={date}>
                {date}
              </div>
              <div className="tr-list">
                {/* 금액, 잔액 */}
                {/* 금액 */}
                {trs.map(({ id, memo, amount, isSend, balance, createdAt }) => {
                  {
                    /* 1원, 93,305원 */
                  }
                  return (
                    <SecondCard
                      title={memo}
                      subTitle={`${createdAt.getHours()}:${createdAt.getMinutes()}`}
                      key={id}
                      Child={
                        <Balance
                          amount={amount}
                          balance={balance}
                          isSend={isSend}
                        />
                      }
                    />
                  );
                })}
              </div>
            </>
          );
        })}
        {/* 반복문 끝 */}
      </div>

      {showDeposit ? (
        <Modal handleModal={() => setShowDeposit(false)}>
          <Deposit />
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Account;
