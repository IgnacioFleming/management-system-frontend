import { useEffect, useState } from "react";

export const useFilter = (data) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [restItems, setRestItems] = useState([]);

  useEffect(() => {
    if (filteredItems.length < 1) return setRestItems(data);
    const newItems = data.filter((item) => !filteredItems.some((e) => item.id === e.id));
    setRestItems(newItems);
  }, [filteredItems, data]);

  const filterItem = (item) => {
    const newFilteredItems = [...filteredItems, item];
    setFilteredItems(newFilteredItems);
  };
  const removeFilteredItem = (item) => {
    const newFilteredItems = filteredItems.filter((e) => e.id !== item.id);
    setFilteredItems(newFilteredItems);
  };
  return { filteredItems, restItems, filterItem, removeFilteredItem };
};
