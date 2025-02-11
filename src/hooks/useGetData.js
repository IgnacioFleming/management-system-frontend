import { useEffect, useState } from "react";

export const useGetData = (service, id) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    id ? getDataById(id) : getData();
  }, [service]);
  const getDataById = async (data_id) => {
    const retrievedData = await service.getById(data_id);
    setData(retrievedData);
  };
  const getData = async () => {
    const retrievedData = await service.getAll();
    setData(retrievedData);
  };
  return [data, getData];
};
