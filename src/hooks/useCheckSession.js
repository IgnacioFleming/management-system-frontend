import { useEffect, useState } from "react";
import SessionsApiCall from "../services/sessions";
import { useLocation } from "react-router-dom";

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
