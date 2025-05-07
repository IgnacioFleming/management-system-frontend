import { createContext, useEffect, useState } from "react";
import { useCheckSession } from "../hooks/useCheckSession";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
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

  const value = { user, setUserData };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export default UserContextProvider;
