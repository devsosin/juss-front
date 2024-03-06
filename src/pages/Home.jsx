import React from "react";

import { Link, useNavigate } from "react-router-dom";

import { FaAngleDown, FaBell } from "react-icons/fa";

import BottomNav from "../components/BottomNav/BottomNav";
import Card from "../components/Card/Card";
import SubButton from "../components/Button/SubButton";

import "./Home.css";

import { won } from "../utils/currency";

const Home = () => {
  const navigate = useNavigate();
  const accounts = [
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
  ];

  const expense = {
    totalUsed: 123600,
    toPay: {
      date: "02-12",
      amount: 1000,
    },
  };

  const gotoAccountDetail = (id) => {
    navigate(`/account/${id}`);
  };
  return (
    <div className="Home">
      <div className="header">
        <div>
          <div></div>
          <div>Juss</div>
        </div>
        <div>
          <FaBell size={24} />
        </div>
      </div>
      <div className="item-container">
        {accounts.map(({ balance, accountName }, id) => {
          return (
            <Card
              key={id}
              title={accountName}
              subTitle={won(balance)}
              Child={""}
              handleClick={() => gotoAccountDetail(id)}
            />
          );
        })}
        <hr style={{ border: 0, borderTop: "1px solid #EFEFEF", margin: 0 }} />
        <Link
          style={{
            cursor: "pointer",
            marginTop: "1rem",
            textDecoration: "None",
            color: "black",
          }}
          to={"/asset"}
        >
          전체 자산 보기 <FaAngleDown size={12} />
        </Link>
      </div>
      <div className="item-container">
        <Card
          title={"이번 달 쓴 금액"}
          subTitle={won(expense.totalUsed)}
          Child={
            <SubButton text={"내역"} handleClick={() => navigate("/expense")} />
          }
        />
        <Card
          title={`${expense.toPay.date} 낼 카드값`}
          subTitle={won(expense.toPay.amount)}
          Child={""}
        />
      </div>
      <div className="item-container-2">
        <div>계좌개설</div>|<div>카드발급</div>|<div>대출받기</div>
      </div>
      <div className="item-container-2">
        <div>계좌개설</div>|<div>카드발급</div>|<div>대출받기</div>
      </div>
      <div className="item-container-2">
        <div>계좌개설</div>|<div>카드발급</div>|<div>대출받기</div>
      </div>
      <div className="item-container-2">
        <div>계좌개설</div>|<div>카드발급</div>|<div>대출받기</div>
      </div>
      <BottomNav />
      {/* bottom nav */}
    </div>
  );
};

export default Home;
