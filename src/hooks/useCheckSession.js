import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SessionsApiCall from "../services/repository/sessions";
import Alerts from "../helpers/alerts/alerts";

export const useCheckSession = () => {
  const [sessionUser, setSessionUser] = useState({});
  const location = useLocation();
  const checkSession = async () => await SessionsApiCall.checkSession();
  useEffect(() => {
    if (location.pathname === "/register") return;
    checkSession()
      .then((res) => setSessionUser(res))
      .catch((err) => Alerts.errorAlert({ text: err }));
  }, [location.pathname]);
  return sessionUser;
};
