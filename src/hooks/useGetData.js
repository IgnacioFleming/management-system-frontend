import { useEffect, useState } from "react";

export const useGetData = (service) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [service]);
  const getData = async () => {
    const retrievedData = await service.getAll();
    setData(retrievedData);
  };
  return [data, getData];
};
