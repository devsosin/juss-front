import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCaretLeft,
  FaCaretRight,
  FaAngleDown,
} from "react-icons/fa";

import BaseButton from "../components/Button/BaseButton";
import CardExpense from "../components/CardExpense/CardExpense";

import "./Expense.css";

import { won } from "../utils/currency";

const Expense = () => {
  const navigate = useNavigate();

  const [month, setMonth] = useState(Date.now().month);
  const [expenseData, setExpenseData] = useState({});

  useEffect(() => {
    // get month expense
    setExpenseData({
      totalExpense: 1954630,
      cards: [
        {
          id: "aksdjc38",
          cardType: "신용",
          cardName: "네이버 현대카드",
          expense: 357600,
          performanceTarget: 300000,
        },
        {
          id: "aksdjcduchs",
          cardType: "신용",
          cardName: "신협 HI-POINT",
          expense: 45000,
          performanceTarget: null,
        },
        {
          id: "djcudjc22",
          cardType: "체크",
          cardName: "네이버 현대카드",
          expense: 357600,
          performanceTarget: null,
        },
        {
          id: "ajcuajc37",
          cardType: "체크",
          cardName: "신협 HI-POINT",
          expense: 1000,
          performanceTarget: 250000,
        },
      ],
    });
  }, []);

  return (
    <div>
      <div className="top-nav">
        <div>
          <Link onClick={() => navigate(-1)}>
            <FaArrowLeft size={24} />
          </Link>
        </div>
      </div>

      <div className="menu-bar expense">
        <div className="active">내 소비</div>
        <div>카드 추천</div>
      </div>

      <div className="monthly-expense">
        <div>
          <span>
            {/* active */}
            <FaCaretLeft size={12} /> 2월 소비 <FaCaretRight size={12} />
          </span>
          <h3>
            {won(expenseData.totalExpense)} <FaAngleDown size={12} />
          </h3>
        </div>
        <div>
          <BaseButton text={"분석"} />
        </div>
      </div>

      <div className="card-expense">
        <CardExpense
          title={"신용카드"}
          cards={expenseData?.cards?.filter(
            ({ cardType }) => cardType === "신용"
          )}
        />

        <CardExpense
          title={"체크카드"}
          cards={expenseData?.cards?.filter(
            ({ cardType }) => cardType === "체크"
          )}
        />
      </div>
    </div>
  );
};

export default Expense;
