import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const isProduction = process.env.NODE_ENV === "production";
export const serverEndPoint = process.env.REACT_APP_API_ROOT;

export const axiosClient = axios.create({
  baseURL: serverEndPoint,
  withCredentials: true,
});

export const AxiosInterceptor = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const resInterceptor = (res) => {
      return res;
    };

    const reqInterceptor = (config) => {
      return config;
    };

    const errInterceptor = (error) => {
      if (error.response?.status === 500) {
        // 500 error 발생 시 start 페이지로 이동
        localStorage.setItem("jwt-token", null);
        navigate("/start");
        return;
      }
    };

    const resResult = axiosClient.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );
    const reqResult = axiosClient.interceptors.request.use(
      reqInterceptor,
      errInterceptor
    );
    return () => {
      axiosClient.interceptors.response.eject(resResult);
      axiosClient.interceptors.request.eject(reqResult);
    };
  }, [navigate]);

  return children;
};
