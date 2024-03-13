import React, { useEffect, useMemo, useState } from "react";
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
import { getCards } from "../api/card";

const Expense = () => {
  const navigate = useNavigate();

  const now = new Date();

  const [ym, setYm] = useState(
    `${now.getFullYear()}${now.getMonth().toString().padStart(2, "0")}`
  );
  const [expense, setExpense] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards({ token: localStorage.getItem("jwt-token"), ym }).then((data) =>
      setCards(data)
    );
  }, [ym]);

  useMemo(() => {
    setExpense(cards.reduce((acc, v) => acc + v.amount, 0));
  }, [cards]);

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
            <FaCaretLeft size={12} /> {ym.slice(4, 6)}월 소비{" "}
            <FaCaretRight size={12} />
          </span>
          <h3>
            {won(expense)} <FaAngleDown size={12} />
          </h3>
        </div>
        <div>
          <BaseButton text={"분석"} />
        </div>
      </div>

      <div className="card-expense">
        <CardExpense
          title={"신용카드"}
          cards={cards?.filter(({ is_credit }) => is_credit)}
        />

        <CardExpense
          title={"체크카드"}
          cards={cards?.filter(({ is_credit }) => !is_credit)}
        />
      </div>
    </div>
  );
};

export default Expense;
