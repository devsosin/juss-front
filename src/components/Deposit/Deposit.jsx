import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Deposit.css";

import Card from "../Card/Card";

import { won } from "../../utils/currency";
import { getAccounts } from "../../api/account";

const Deposit = ({ toId }) => {
  const navigate = useNavigate();

  const [myAccounts, setMyAccounts] = useState([]);

  // 내 계좌 제외
  useEffect(() => {
    getAccounts({ token: localStorage.getItem("jwt-token") }).then((accounts) =>
      setMyAccounts(
        accounts.filter((v) => v.id !== toId && v.account_type === 0)
      )
    );
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
        {myAccounts.map(({ balance, account_name, id }) => {
          return (
            <Card
              key={id}
              title={account_name}
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
