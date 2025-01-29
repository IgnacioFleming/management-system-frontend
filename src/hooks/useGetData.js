import { useEffect, useState } from "react";

export const useGetData = (service, id) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    id ? getDataById(id) : refreshData();
  }, [service]);
  const getDataById = async (data_id) => {
    const retrievedData = await service.getById(data_id);
    setData(retrievedData);
  };
  const refreshData = async () => {
    const retrievedData = await service.getAll();
    setData(retrievedData);
  };
  return { data, refreshData, setData };
};
