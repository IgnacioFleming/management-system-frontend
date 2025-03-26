import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SessionsApiCall from "../services/repository/sessions";

export const useCheckSession = () => {
  const [sessionUser, setSessionUser] = useState({});
  const location = useLocation();
  const checkSession = async () => await SessionsApiCall.checkSession();
  useEffect(() => {
    if (location.pathname === "/register" || location.pathname === "/login") return;
    checkSession().then((res) => setSessionUser(res));
  }, [location.pathname]);
  return sessionUser;
};
