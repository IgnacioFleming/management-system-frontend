import { useEffect, useState } from "react";

export const useGetDataById = (service, id) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!id) return;
    getDataById(id);
  }, [service]);
  const getDataById = async (data_id) => {
    const retrievedData = await service.getById(data_id);
    setData(retrievedData);
  };
  return [data, getDataById];
};
