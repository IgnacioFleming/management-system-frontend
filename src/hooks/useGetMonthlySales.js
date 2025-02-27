import { useEffect, useState } from "react";
import { salesService } from "../services";

export const useGetMonthlySales = (initial) => {
  const [data, setData] = useState(initial);
  useEffect(() => {
    getMonthlySales();
  }, []);
  const getMonthlySales = async () => {
    const retrievedData = await salesService.getMonthlySales();
    setData(retrievedData);
  };
  return [data];
};
