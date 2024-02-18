import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import "./Asset.css";

import BaseButton from "../components/Button/BaseButton";
import SubButton from "../components/Button/SubButton";
import Card from "../components/Card/Card";

import { won } from '../utils/currency'

const Asset = () => {
  const totalMoney = 54839483;
  const datas = [
    {
      id: "asdfdsf",
      balance: 93305,
      isShow: true,
      accountName: "KB마이핏통장",
      accountType: '입출금' // -> 송금버튼
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
  const [accountmoney, setAccountMoney] = useState(0);


  const navigate = useNavigate();

  const gotoAccountDetail = (id) => {
    navigate(`/account/${id}`)
  }

  useEffect(()=> {
    setAccountMoney(
      datas.reduce((acc, {balance}) => {
      return acc + balance
      }, 0))
  }, [])

  return (
    <div className="Asset">
      <div className="topNav">
        <Link onClick={() => navigate(-1)}>
          <FaArrowLeft size={24} />
        </Link>
        <button>편집</button>
      </div>

      <div className="menuBar">
        <div className="active">자산</div>
        <div>자산 굴리기</div>
        <div>대출 찾기</div>
      </div>

      <div className="asset">
        <div>
          <h3>총 자산</h3>
          <span>{won(totalMoney)}</span>
        </div>
        <BaseButton text={"분석"} />
      </div>

      <div className="asset">
        <div>
          <h3 style={{fontWeight: 'normal'}}>계좌</h3>
          <span className="small-text">{won(accountmoney)}</span>

        </div>

      </div>

      <div className="asset flex-column">
        <h3 className="sub-text">입출금</h3>
        {datas.map(({ balance, accountName, isShow, accountType, id }, key) => {
          if (isShow) {
            let btn = "";
            if (accountType) {
              btn = <SubButton text={'송금'} handleClick={() => gotoAccountDetail(id)} />
            }
            return (
              <Card key={key} title={accountName} subTitle={won(balance)} Child={btn} />
            );
          }
        })}
      </div>

      <div className="asset flex-column">
        <h3 className="sub-text">숨긴 계좌</h3>
        {datas.map(({ balance, accountName, isShow, id, accountType }, key) => {
          if (!isShow) {
            let btn = "";
            if (accountType) {
              btn = <SubButton text={'송금'} handleClick={() => gotoAccountDetail(id)} />
            }
            return (
              <Card key={key} title={accountName} subTitle={won(balance)} Child={btn} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Asset;
