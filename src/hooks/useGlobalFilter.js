import { FilterMatchMode } from "primereact/api";
import { useState } from "react";

export const useGlobalFilter = () => {
  const [filters, setFilters] = useState({ global: { value: null, matchMode: FilterMatchMode.CONTAINS } });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let inputValue = value;
<<<<<<< HEAD
    if (inputValue.startsWith("$") && typeof inputValue === "string") inputValue = value.slice(1);
=======
    if (inputValue && inputValue.startsWith("$") && typeof inputValue === "string") inputValue = value.slice(1);
>>>>>>> main
    inputValue = inputValue.replace(/(\.0{0,2})$/, "");
    let _filters = { ...filters };
    _filters["global"].value = inputValue;
    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const handleRefresh = () => {
    setFilters({ global: { value: null, matchMode: FilterMatchMode.CONTAINS } });
    setGlobalFilterValue("");
  };
  return { globalFilterValue, onGlobalFilterChange, handleRefresh, filters };
};
