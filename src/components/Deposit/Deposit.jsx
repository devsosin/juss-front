import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Deposit.css";

import Card from "../Card/Card";

import { won } from "../../utils/currency";

const Deposit = ({ toId }) => {
  const navigate = useNavigate();

  const [myAccounts, setMyAccounts] = useState([]);

  // 내 계좌 제외
  useEffect(() => {
    setMyAccounts([
      {
        id: "asdfdsf",
        balance: 93305,
        isShow: true,
        accountName: "KB마이핏통장",
      },
      {
        id: "asdfdsf",
        balance: 93305,
        isShow: false,
        accountName: "신협",
      },
      {
        id: "asdfdsf",
        balance: 302305,
        isShow: true,
        accountName: "커플통장",
      },
      {
        id: "asdfdsf",
        balance: 172305,
        isShow: true,
        accountName: "하나은행네이버페이통장",
      },
      {
        id: "asdfdsf",
        balance: 3000000,
        isShow: true,
        accountName: "청년내일저축계좌",
      },
    ]);
  }, []);

  return (
    <div className="deposit">
      <hr
        style={{
          width: "60px",
          height: "4px",
          border: 0,
          backgroundColor: "#D9D9D9",
        }}
      />

      <h3>어떤 계좌에서 돈을 가져올까요?</h3>

      <div className="my-account-list">
        {myAccounts.map(({ balance, accountName, id }) => {
          return (
            <Card
              key={id}
              title={accountName}
              subTitle={won(balance)}
              Child={""}
              handleClick={() => navigate(`/transfer/${id}/${toId}`)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Deposit;
