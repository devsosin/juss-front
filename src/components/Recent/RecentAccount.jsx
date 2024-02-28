import React from "react";

import { FaCamera, FaAngleRight } from "react-icons/fa";

import SecondCard from "../Card/SecondCard";
import Favorite from "../Card/Favorite";

import "./RecentAccount.css";

const RecentAccount = ({ recentAccounts }) => {
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
              bankName,
              accountName,
              accountNumber,
              isFavorite,
              isOwn,
            }) => {
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
      </div>
    </>
  );
};

export default RecentAccount;
