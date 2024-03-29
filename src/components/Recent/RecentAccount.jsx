import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaCamera, FaAngleRight } from "react-icons/fa";

import SecondCard from "../Card/SecondCard";
import Favorite from "../Card/Favorite";

import "./RecentAccount.css";

import { getRecents } from "../../api/account";

const RecentAccount = ({ fromId }) => {
  const navigate = useNavigate();

  const [recentAccounts, setRecentAccounts] = useState([]);

  // id를 통해 가져오기
  useEffect(() => {
    getRecents({ token: localStorage.getItem("jwt-token"), type: 0 }).then(
      (res) => setRecentAccounts(res)
    );
  }, [fromId]);

  return (
    <>
      <div className="account-input-box">
        <input
          type="text"
          className="account-input"
          placeholder="계좌번호 입력"
        />

        <FaCamera size={16} />
      </div>

      <div className="account-list">
        <div className="my-accounts">
          <span>내 계좌</span>
          <span>
            +16개 <FaAngleRight size={12} />
          </span>
        </div>
        <div className="recent-accounts">
          <span>최근 보낸 계좌</span>

          {recentAccounts.map(
            ({
              id,
              bank_name,
              account_name,
              account_number,
              is_favorite,
              is_own,
            }) => {
              return (
                <SecondCard
                  key={id}
                  title={`${is_own ? "내" : ""} ${account_name}`}
                  subTitle={`${bank_name} ${account_number}`}
                  Child={<Favorite id={id} isFavorite={is_favorite} />}
                  handleClick={() => navigate(`/transfer/${fromId}/${id}`)}
                />
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default RecentAccount;
