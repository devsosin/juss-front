import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import "./Asset.css";

import BaseButton from "../components/Button/BaseButton";
import SubButton from "../components/Button/SubButton";
import Card from "../components/Card/Card";

import { won } from "../utils/currency";
import axios from "axios";

const Asset = () => {
  const [accounts, setAccounts] = useState([]);

  const [accountMoney, setAccountMoney] = useState(0);

  const navigate = useNavigate();

  const gotoAccountDetail = (id) => {
    navigate(`/account/${id}`);
  };

  useEffect(() => {
    axios({
      url: "http://localhost:8080/api/v1/accounts",
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    })
      .then((res) => setAccounts(res.data.accounts))
      .catch((e) => {
        localStorage.setItem("jwt-token", null);
        navigate("/start");
      });
  }, []);

  useEffect(() => {
    setAccountMoney(
      accounts.reduce((acc, { balance }) => {
        return acc + balance;
      }, 0)
    );
  }, [accounts]);

  return (
    <div className="Asset">
      <div className="top-nav">
        <Link onClick={() => navigate(-1)}>
          <FaArrowLeft size={24} />
        </Link>
        <button>편집</button>
      </div>

      <div className="menu-bar asset">
        <div className="active">자산</div>
        <div>자산 굴리기</div>
        <div>대출 찾기</div>
      </div>

      <div className="asset-info">
        <div>
          <h3>총 자산</h3>
          <span>{won(accountMoney)}</span>
        </div>
        <BaseButton text={"분석"} />
      </div>

      <div className="asset-info">
        <div>
          <h3 style={{ fontWeight: "normal" }}>계좌</h3>
          <span className="small-text">{won(accountMoney)}</span>
        </div>
      </div>

      <div className="asset-info flex-column">
        <h3 className="sub-text">입출금</h3>
        {accounts.map(
          ({ balance, account_name, is_show, account_type, id }) => {
            if (is_show) {
              let btn = "";
              if (account_type === 0) {
                btn = (
                  <SubButton
                    text={"송금"}
                    handleClick={() => gotoAccountDetail(id)}
                  />
                );
              }
              return (
                <Card
                  key={id}
                  title={account_name}
                  subTitle={won(balance)}
                  Child={btn}
                  handleClick={() => gotoAccountDetail(id)}
                />
              );
            }
          }
        )}
      </div>

      <div className="asset-info flex-column">
        <h3 className="sub-text">숨긴 계좌</h3>
        {accounts.map(
          ({ balance, account_name, is_show, id, account_type }, key) => {
            if (!is_show) {
              let btn = "";
              if (account_type === 0) {
                btn = (
                  <SubButton
                    text={"송금"}
                    handleClick={() => gotoAccountDetail(id)}
                  />
                );
              }
              return (
                <Card
                  key={id}
                  title={account_name}
                  subTitle={won(balance)}
                  Child={btn}
                  handleClick={() => gotoAccountDetail(id)}
                />
              );
            }
          }
        )}
      </div>
    </div>
  );
};

export default Asset;
