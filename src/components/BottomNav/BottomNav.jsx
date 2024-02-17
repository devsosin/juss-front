import React from "react";
import "./BottomNav.css";

import { FaHouse, FaChartLine, FaBars } from "react-icons/fa6";
import { FaGem, FaShoppingBag } from "react-icons/fa";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="active">
        <FaHouse size={24} />
        <span>홈</span>
      </div>
      <div>
        <FaGem size={24} />
        <span>혜택</span>
      </div>
      <div>
        <FaShoppingBag size={24} />
        <span>주스페이</span>
      </div>
      <div>
        <FaChartLine size={24} />
        <span>주식</span>
      </div>
      <div>
        <FaBars size={24} />
        <span>전체</span>
      </div>
    </div>
  );
};

export default BottomNav;
