import React from "react";
import { useNavigate } from "react-router-dom";

import "./Start.css";

import BaseButton from "../components/Button/BaseButton";

import axios from "axios";

const Start = () => {
  const navigate = useNavigate();
  const startJussApp = () => {
    // API 서버로 데이터 요청
    axios({
      url: "http://127.0.0.1:8080/api/v1/start",
      method: "post",
      headers: {},
    }).then((res) => {
      // 토큰 값 localStorage에 저장
      localStorage.setItem("jwt-token", res.data.access_token);
      // home 화면으로 이동
      navigate("/");
    });
  };

  return (
    <div className="start-bg">
      <div>
        <BaseButton text={"시작하기"} handleClick={() => startJussApp()} />
      </div>
    </div>
  );
};

export default Start;
