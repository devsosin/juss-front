import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import BaseButton from "../components/Button/BaseButton";
import RecentAccount from "../components/Recent/RecentAccount";
import RecentPhone from "../components/Recent/RecentPhone";

import "./Withdraw.css";

const Withdraw = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState(true);

  const { id } = useParams();

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
        {category ? <RecentAccount id={id} /> : <RecentPhone id={id} />}
      </div>
    </div>
  );
};

export default Withdraw;
