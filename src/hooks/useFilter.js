import { useEffect, useState } from "react";

export const useFilter = (data, initialFilteredItems) => {
  const [filteredItems, setFilteredItems] = useState(initialFilteredItems || []);
  const [restItems, setRestItems] = useState([]);
  console.log(data);

  useEffect(() => {
    if (filteredItems.length < 1) return setRestItems(data);
    const newItems = data.filter((item) => !filteredItems.some((e) => item.id === e.id));
    setRestItems(newItems);
  }, [filteredItems, data]);

  const filterItem = (item) => {
    const newFilteredItems = [...filteredItems, item];
    setFilteredItems(newFilteredItems);
    localStorage.setItem("filteredItems", JSON.stringify(newFilteredItems));
  };
  const removeFilteredItem = (item) => {
    const newFilteredItems = filteredItems.filter((e) => e.id !== item.id);
    setFilteredItems(newFilteredItems);
    localStorage.setItem("filteredItems", JSON.stringify(newFilteredItems));
  };

  const refreshFilteredItems = () => {
    setFilteredItems([]);
    localStorage.removeItem("filteredItems");
  };

  return { filteredItems, restItems, filterItem, removeFilteredItem, refreshFilteredItems };
};
