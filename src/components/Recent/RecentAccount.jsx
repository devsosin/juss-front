import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaCamera, FaAngleRight } from "react-icons/fa";

import SecondCard from "../Card/SecondCard";
import Favorite from "../Card/Favorite";

import "./RecentAccount.css";

const RecentAccount = ({ id }) => {
  const navigate = useNavigate();

  const [recentAccounts, setRecentAccounts] = useState([]);

  // id를 통해 가져오기
  useEffect(() => {
    setRecentAccounts([
      {
        id: "abasdfasdf",
        accountName: "최재진 (소신)",
        bankName: "KB국민",
        accountNumber: "28350104539502",
        isFavorite: false,
        isOwn: false,
      },
      {
        id: "abasdfasdfasdfasdf",
        accountName: "네이버페이 하나통장",
        bankName: "하나",
        accountNumber: "15391061187307",
        isFavorite: false,
        isOwn: true,
      },
      {
        id: "dkjdclif",
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
              rid,
              bankName,
              accountName,
              accountNumber,
              isFavorite,
              isOwn,
            }) => {
              return (
                <SecondCard
                  key={rid}
                  title={`${isOwn ? "내" : ""} ${accountName}`}
                  subTitle={`${bankName} ${accountNumber}`}
                  Child={<Favorite isFavorite={isFavorite} />}
                  handleClick={() => navigate(`/transfer/${id}/${rid}`)}
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
