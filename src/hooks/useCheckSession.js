import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SessionsApiCall from "../services/repository/sessions";

export const useCheckSession = () => {
  const [sessionUser, setSessionUser] = useState({});
  const location = useLocation();
  const checkSession = async () => await SessionsApiCall.checkSession();
  useEffect(() => {
    checkSession()
      .then((res) => setSessionUser(res))
      .catch((err) => console.log(err));
  }, [location.pathname]);
  return sessionUser;
};
