import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCheckSession } from "../hooks/useCheckSession";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
  const location = useLocation();
  const setUserData = (data) => {
    if (data) {
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
    }
  };

  const session = useCheckSession();

  useEffect(() => {
    if (session && Object.keys(session).length > 0) setUserData(session);
  }, [session]);

  useEffect(() => {
    if (location.pathname === "/login" && user && Object.keys(user).length > 0) {
      window.history.pushState(null, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
      return;
    }
    if (location.pathname !== "/register" && location.pathname !== "/login" && Object.keys(user).length === 0) {
      window.history.pushState(null, "", "/login");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  }, [location.pathname]);

  const value = { user, setUserData };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export default UserContextProvider;
