import React from "react";
import { useNavigate } from "react-router-dom";

import "./Start.css";

import BaseButton from "../components/Button/BaseButton";

import { startJuss } from "../api/start";

const Start = () => {
  const navigate = useNavigate();
  const startJussApp = () => {
    startJuss().then((res) => {
      localStorage.setItem("jwt-token", res.data.access_token);
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
