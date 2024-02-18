import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Card from '../components/Card/Card'

import './Account.css'

const Account = ( {id} ) => {
  const navigate = useNavigate();

  console.log(id);
  return <div className="Account">
    <div className="top-nav">
      <div>
        <Link onClick={() => navigate(-1)}>
          <FaArrowLeft size={24} />
        </Link>
        <span>KB마이핏통장</span>
      </div>
        <button>관리</button>
    </div>

    <div className="account-info">
      <div>
        국민은행 70100200140450

        복사
      </div>

      <div>
        금액
      </div>

    </div>

    <div className="account-btn">
      <button>채우기</button>
      <button>보내기</button>
    </div>

    <div className="account-transaction">
      <div>
        전체

        불러오는 중 / 불러오기 완료
      </div>

      {/* 반복문 시작 */}

      <div className="tr-date">
        1월 27일
      </div>

      <div className="tr-list">
        {/* Card 2 반대로, 별표 */}
        <Card title={"617 계좌개설"} subTitle={"14:13"} />

        {/* 1원, 93,305원 */}
      </div>

      {/* 반복문 끝 */}
      </div>
  </div>;
};

export default Account;
