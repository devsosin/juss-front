import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

import SecondCard from "../Card/SecondCard";
import Favorite from "../Card/Favorite";

import "./RecentPhone.css";
import axios from "axios";

const RecentPhone = ({ fromId }) => {
  const navigate = useNavigate();
  const [recentPhones, setRecentPhones] = useState([]);
  // id를 통해 가져오기
  useEffect(() => {
    axios({
      url: "http://localhost:8080/api/v1/recent?type=2",
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    })
      .then((res) => setRecentPhones(res.data.accounts))
      .catch((e) => {
        localStorage.setItem("jwt-token", null);
        navigate("/start");
      });
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
