import React from "react";

import { FaSearch } from "react-icons/fa";

import SecondCard from "../Card/SecondCard";
import Favorite from "../Card/Favorite";

import "./RecentPhone.css";

const RecentPhone = ({ recentPhones }) => {
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
          ({ id, accountName, accountNumber, bankName, isFavorite, isOwn }) => {
            return (
              <SecondCard
                key={id}
                title={`${isOwn ? "내" : ""} ${accountName}`}
                subTitle={`${bankName} ${accountNumber}`}
                Child={<Favorite isFavorite={isFavorite} />}
              />
            );
          }
        )}
      </div>
    </>
  );
};

export default RecentPhone;
