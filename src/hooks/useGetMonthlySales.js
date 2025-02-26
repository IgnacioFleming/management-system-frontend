import { useEffect, useState } from "react";
import { salesService } from "../services";

export const useGetMonthlySales = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getMonthlySales();
  }, []);
  const getMonthlySales = async () => {
    const retrievedData = await salesService.getMonthlySales();
    setData(retrievedData);
  };
  return [data];
};
