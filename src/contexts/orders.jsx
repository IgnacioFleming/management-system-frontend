import { createContext } from "react";
import { useFilter } from "../hooks/useFilter";
import { useGetData } from "../hooks/useGetData";
import ProductsApiCall from "../services/products";
import CostumersApiCall from "../services/costumers";

export const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const { data } = useGetData(CostumersApiCall);
  const { data: products } = useGetData(ProductsApiCall);
  const { filteredItems, restItems, filterItem, removeFilteredItem, refreshFilteredItems } = useFilter(products, JSON.parse(localStorage.getItem("filteredItems")));
  const tools = { filteredItems, restItems, filterItem, removeFilteredItem, refreshFilteredItems, data };
  return <OrderContext.Provider value={tools}>{children}</OrderContext.Provider>;
}

export default OrderContextProvider;
