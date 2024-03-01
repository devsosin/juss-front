import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

import SecondCard from "../Card/SecondCard";
import Favorite from "../Card/Favorite";

import "./RecentPhone.css";

const RecentPhone = ({ id }) => {
  const navigate = useNavigate();
  const [recentPhones, setRecentPhones] = useState([]);
  // id를 통해 가져오기
  useEffect(() => {
    setRecentPhones([
      // accountType?
      {
        id: "dkjdclif",
        accountName: "수빈 (박*빈)",
        bankName: "",
        accountNumber: "010-2341-1234",
        isFavorite: true,
        isOwn: false,
      },
      {
        id: "dkjdcliasdf",
        accountName: "수빈 (박*빈)",
        bankName: "",
        accountNumber: "010-2341-1234",
        isFavorite: false,
        isOwn: false,
      },
      {
        id: "dkjdcdcclif",
        accountName: "수빈 (박*빈)",
        bankName: "",
        accountNumber: "010-2341-1234",
        isFavorite: false,
        isOwn: false,
      },
      {
        id: "dkjwdwddclif",
        accountName: "수빈 (박*빈)",
        bankName: "",
        accountNumber: "010-2341-1234",
        isFavorite: true,
        isOwn: false,
      },
    ]);
  }, [id]);

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
            rid,
            accountName,
            accountNumber,
            bankName,
            isFavorite,
            isOwn,
          }) => {
            return (
              <SecondCard
                key={id}
                title={`${isOwn ? "내" : ""} ${accountName}`}
                subTitle={`${bankName} ${accountNumber}`}
                Child={<Favorite isFavorite={isFavorite} />}
                handleClick={() => navigate(`/transfer/${id}/${rid}`)}
              />
            );
          }
        )}
      </div>
    </>
  );
};

export default RecentPhone;
