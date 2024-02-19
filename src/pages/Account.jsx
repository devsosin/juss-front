import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";

import SecondCard from '../components/Card/SecondCard'
import BaseButton from '../components/Button/BaseButton'

import { won } from '../utils/currency'

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
        <span style={{textDecoration:"underline", marginRight:".5rem"}}>국민은행 70100200140450</span>
        <IoCopyOutline size={12} />
        <span style={{fontSize: "10px", marginLeft: ".25rem"}}>복사</span>
      </div>

      <div>
        <span>{won(93050)}</span>
      </div>

    </div>

    <div className="account-btns">
      <BaseButton text={"채우기"} />
      <BaseButton text={"보내기"} />
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
        {/* 금액 */}
        <SecondCard title={"617 계좌개설"} subTitle={"14:13"} />

        {/* 1원, 93,305원 */}
      </div>

      {/* 반복문 끝 */}
      </div>
  </div>;
};

export default Account;
