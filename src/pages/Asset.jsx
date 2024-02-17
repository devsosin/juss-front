import React from "react";

import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import "./Asset.css";

import BaseButton from "../components/Button/BaseButton";

const Asset = () => {
  const totalMoney = 548394833;
  const datas = [
    {
      id: "asdfdsf",
      balance: 93305,
      isShow: true,
      accountName: "KB마이핏통장",
    },
    {
      id: "asdfdsf",
      balance: 3000000,
      isShow: false,
      accountName: "청년내일저축계좌",
    },
    {
      id: "asdfdsf",
      balance: 900000,
      isShow: true,
      accountName: "KB특별한적금",
    },
    {
      id: "asdfdsf",
      balance: 900000,
      isShow: false,
      accountName: "KB특별한적금",
    },
    {
      id: "asdfdsf",
      balance: 900000,
      isShow: false,
      accountName: "KB특별한적금",
    },
  ];
  return (
    <div className="Asset">
      <div className="topNav">
        <Link to={"/"}>
          <FaArrowLeft size={24} />
        </Link>
        <button>편집</button>
      </div>
      <div className="menuBar">
        <div className="active">자산</div>
        <div>자산 굴리기</div>
        <div>대출 찾기</div>
      </div>

      <div className="total">
        <div>
          <h3>총 자산</h3>
          <span>54,333,333원</span>
        </div>
        <BaseButton text={"분석"} />
      </div>

      <div>
        <h3>입출금</h3>
        <div>
          <span>아이콘</span>
          <span>제목</span>
          <span>금액</span>
          <button>송금</button>
        </div>

        <h3>숨긴 계좌</h3>
      </div>
    </div>
  );
};

export default Asset;
