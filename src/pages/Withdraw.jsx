import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { useParams } from "react-router-dom";

import BaseButton from "../components/Button/BaseButton";
import RecentAccount from "../components/Recent/RecentAccount";
import RecentPhone from "../components/Recent/RecentPhone";

import "./Withdraw.css";

const Withdraw = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState(true);
  const { id } = useParams();

  const recentAccounts = [
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
  ];

  const recentPhones = [
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
  ];

  return (
    <div>
      <div className="top-nav">
        <div>
          <Link onClick={() => navigate(-1)}>
            <FaArrowLeft size={24} />
          </Link>
        </div>
      </div>

      <div className="with-header">
        <h3>어디로 돈을 보낼까요?</h3>
      </div>

      <div className="account-category-btns">
        <BaseButton
          addClass={category ? "active" : ""}
          text={"계좌"}
          handleClick={() => setCategory(true)}
        />
        <BaseButton
          addClass={!category ? "active" : ""}
          text={"연락처"}
          handleClick={() => setCategory(false)}
        />
      </div>
      <div className="recent-box">
        {category ? (
          <RecentAccount recentAccounts={recentAccounts} />
        ) : (
          <RecentPhone recentPhones={recentPhones} />
        )}
      </div>

      <div
        className="phone-box"
        style={{ display: !category ? "block" : "none" }}
      ></div>
    </div>
  );
};

export default Withdraw;
