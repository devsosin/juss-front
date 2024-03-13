import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

import SecondCard from "../Card/SecondCard";
import Favorite from "../Card/Favorite";

import "./RecentPhone.css";

import { getRecents } from "../../api/account";

const RecentPhone = ({ fromId }) => {
  const navigate = useNavigate();
  const [recentPhones, setRecentPhones] = useState([]);
  // id를 통해 가져오기
  useEffect(() => {
    getRecents({ token: localStorage.getItem("jwt-token"), type: 2 }).then(
      (res) => setRecentPhones(res)
    );
  }, [fromId]);

  return (
    <>
      <div className="phone-input-box">
        <FaSearch size={12} />
        <input
          type="text"
          className="phone-input"
          placeholder="검색 / 직접 입력"
        />
      </div>
      <div className="recent-phones">
        {recentPhones.map(
          ({
            id,
            account_name,
            account_number,
            bank_name,
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
    </>
  );
};

export default RecentPhone;
