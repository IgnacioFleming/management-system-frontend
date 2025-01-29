import { useEffect } from "react";
import SessionsApiCall from "../services/sessions";
import { useLocation } from "react-router-dom";

export const useCheckSession = () => {
  const location = useLocation();
  const checkSession = async () => await SessionsApiCall.checkSession();
  useEffect(() => {
    checkSession().then((res) => console.log(res));
  }, [location.pathname]);
};
