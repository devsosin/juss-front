import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
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
import axios from "axios";

const Account = () => {
  const navigate = useNavigate();
  const [showDeposit, setShowDeposit] = useState(false);

  const { accountId } = useParams();

  const [account, setAccount] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios({
      url: `http://localhost:8080/api/v1/account/${accountId}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    })
      .then((res) => setAccount(res.data))
      .catch((e) => {
        localStorage.setItem("jwt-token", null);
        navigate("/start");
      });

    // .catch((e) => {
    //   localStorage.setItem("jwt-token", null);
    //   navigate("/start");
    // });
  }, [accountId]);

  useEffect(() => {
    axios({
      url: `http://localhost:8080/api/v1/transaction/${accountId}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    }).then((res) => {
      let nowBalance = account.balance;
      const data = res.data.transactions.reduce((acc, v, i) => {
        const haveDate = acc.filter(({ date }) => date === v.created_at);
        if (i === 0) {
          nowBalance = account.balance;
        } else {
          nowBalance =
            v.sender_id === accountId
              ? nowBalance - v.amount
              : nowBalance + v.amount;
        }
        const tr = {
          ...v,
          is_send: v.sender_id.toString() === accountId,
          balance: nowBalance,
        };

        if (haveDate.length !== 0) {
          acc[acc.length - 1].trs.add(tr);
        } else {
          acc.push({ date: v.created_at, trs: [tr] });
        }
        return acc;
      }, []);

      setTransactions(data);
    });
  }, [account]);

  const isLoading = false;

  return (
    <div className="Account">
      <div className="top-nav">
        <div>
          <Link onClick={() => navigate(-1)}>
            <FaArrowLeft size={24} />
          </Link>
          <span>{account.account_name}</span>
        </div>
        <button>관리</button>
      </div>

      <div className="account-info">
        <div>
          {/* 이부분 좀 더 간단하게 구현 안되나 -> Toast 띄우기 */}
          <CopyToClipboard
            text={`${account.bank_name} ${account.account_number}`}
          >
            <text style={{ textDecoration: "underline", marginRight: ".5rem" }}>
              {account.bank_name} {account.account_number}
            </text>
          </CopyToClipboard>
          <CopyToClipboard
            text={`${account.bank_name} ${account.account_number}`}
          >
            <IoCopyOutline size={12} />
          </CopyToClipboard>
          <CopyToClipboard
            text={`${account.bank_name} ${account.account_number}`}
          >
            <text style={{ fontSize: "10px", marginLeft: ".25rem" }}>복사</text>
          </CopyToClipboard>
        </div>

        <div>
          <span>{won(account.balance)}</span>
        </div>
      </div>

      {account.account_type === 0 ? (
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
      ) : null}

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
                {`${date[1]}월 ${date[2]}일`}
              </div>
              <div className="tr-list">
                {trs.map(
                  ({ id, memo, amount, is_send, balance, created_at }) => {
                    return (
                      <SecondCard
                        title={memo}
                        subTitle={`${created_at[3]
                          .toString()
                          .padStart(2, "0")}:${created_at[4]
                          .toString()
                          .padStart(2, "0")}`}
                        key={id}
                        Child={
                          <Balance
                            amount={amount}
                            balance={balance}
                            isSend={is_send}
                          />
                        }
                      />
                    );
                  }
                )}
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
