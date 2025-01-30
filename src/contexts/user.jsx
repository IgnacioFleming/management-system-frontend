import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCheckSession } from "../hooks/useCheckSession";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) ?? {});
  const location = useLocation();
  useCheckSession();
  const setUserData = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  useEffect(() => {
    if (Object.keys(user).length !== 0) return;
    window.history.pushState(null, "", "/login");
    window.dispatchEvent(new PopStateEvent("popstate"));
  }, [user, location]);

  const value = { user, setUserData };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export default UserContextProvider;
