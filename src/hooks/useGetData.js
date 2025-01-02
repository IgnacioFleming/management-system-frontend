import { useEffect, useState } from "react";

export const useGetData = (service) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    refreshData();
  }, [service]);
  const refreshData = async () => {
    const retrievedData = await service.getAll();
    setData(retrievedData);
  };
  return { data, refreshData, setData };
};
