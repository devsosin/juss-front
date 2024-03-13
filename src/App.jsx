import React from "react";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import "./App.css";
import { AxiosInterceptor } from "./utils/axios";

const App = () => {
  return (
    <BrowserRouter>
      <AxiosInterceptor>
        <div className="App">
          <Routes />
        </div>
      </AxiosInterceptor>
    </BrowserRouter>
  );
};

export default App;
