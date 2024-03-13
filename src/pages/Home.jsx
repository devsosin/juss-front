import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FaAngleDown, FaBell } from "react-icons/fa";

import BottomNav from "../components/BottomNav/BottomNav";
import Card from "../components/Card/Card";
import SubButton from "../components/Button/SubButton";

import "./Home.css";

import { won } from "../utils/currency";
import { getAccounts } from "../api/account";
import { getUsed, getTopay } from "../api/transaction";

const Home = () => {
  const navigate = useNavigate();

  const [accounts, setAccounts] = useState([]);
  const [totalUsed, setTotalUsed] = useState(0);
  const [toPay, setToPay] = useState({});

  useEffect(() => {
    getAccounts({
      token: localStorage.getItem("jwt-token"),
      isShow: "true",
    }).then((data) => setAccounts(data));

    getUsed({ token: localStorage.getItem("jwt-token") }).then((data) =>
      setTotalUsed(data)
    );

    getTopay({ token: localStorage.getItem("jwt-token") }).then((data) =>
      setToPay(data)
    );
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
