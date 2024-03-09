import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FaAngleDown, FaBell } from "react-icons/fa";

import BottomNav from "../components/BottomNav/BottomNav";
import Card from "../components/Card/Card";
import SubButton from "../components/Button/SubButton";

import "./Home.css";

import { won } from "../utils/currency";

import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const [accounts, setAccounts] = useState([]);
  const [totalUsed, setTotalUsed] = useState(0);
  const [toPay, setToPay] = useState({});

  useEffect(() => {
    // axiosInterceptor
    axios({
      url: "http://localhost:8080/api/v1/accounts?isShow=true",
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

    axios({
      url: "http://localhost:8080/api/v1/used",
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    })
      .then((res) => setTotalUsed(res.data.amount))
      .catch((e) => {
        localStorage.setItem("jwt-token", null);
        navigate("/start");
      });

    axios({
      url: "http://localhost:8080/api/v1/topay",
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    })
      .then((res) => setToPay(res.data.topay))
      .catch((e) => {
        localStorage.setItem("jwt-token", null);
        navigate("/start");
      });
  }, []);

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
        {accounts.map(({ id, balance, account_name, account_type }) => {
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
              handleClick={() => navigate(`/account/${id}`)}
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
          subTitle={won(totalUsed)}
          Child={
            <SubButton text={"내역"} handleClick={() => navigate("/expense")} />
          }
        />
        <Card
          title={`${toPay.date} 낼 카드값`}
          subTitle={won(toPay.amount)}
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
