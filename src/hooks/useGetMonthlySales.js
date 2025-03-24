import { useContext, useEffect, useState } from "react";
import { salesService } from "../services";
import { UserContext } from "../contexts/user";

export const useGetMonthlySales = (initial) => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState(initial);
  useEffect(() => {
    if (Object.keys(user).length <= 0) return;
    getMonthlySales();
  }, []);
  const getMonthlySales = async () => {
    const retrievedData = await salesService.getMonthlySales();
    setData(retrievedData);
  };
  return [data];
};
