import { createContext, useEffect, useState } from "react";
import { useFilter } from "../hooks/useFilter";
import { useGetData } from "../hooks/useGetData";
import ProductsApiCall from "../services/products";
import CostumersApiCall from "../services/costumers";

export const SalesContext = createContext();

function SalesContextProvider({ children }) {
  const { data } = useGetData(CostumersApiCall);
  const { data: products } = useGetData(ProductsApiCall);
  const { filteredItems, restItems, filterItem, removeFilteredItem, refreshFilteredItems, setQuantity } = useFilter(products, JSON.parse(localStorage.getItem("filteredItems")));

  const [sale, setSale] = useState({});
  const [selectedCostumer, setSelectedCostumer] = useState(JSON.parse(localStorage.getItem("costumer")) || null);

  useEffect(() => {
    if (!selectedCostumer) {
      const newSale = { ...sale };
      delete newSale.costumer_id;
      setSale(newSale);
      return;
    }
    const newSale = { ...sale, costumer_id: selectedCostumer.id };
    setSale(newSale);
  }, [selectedCostumer]);

  useEffect(() => {
    const product_ids = filteredItems.map((item) => {
      return { id: item.id, quantity: item.quantity, amount: item.quantity * item.price };
    });
    const newSale = { ...sale, products: product_ids, items_quantity: getItemsQuantity(product_ids), total_amount: getTotalAmount(product_ids) };
    setSale(newSale);
  }, [filteredItems]);
  const getItemsQuantity = (array) => {
    const quantity = array.reduce((acc, { quantity }) => acc + quantity, 0);
    return quantity;
  };

  const getTotalAmount = (array) => {
    const totalAmount = array.reduce((acc, { amount }) => acc + amount, 0);
    return totalAmount;
  };

  const handleSelectCostumer = (costumer) => {
    setSelectedCostumer(costumer);
    if (!costumer) {
      refreshFilteredItems();
      return localStorage.removeItem("costumer");
    }
    localStorage.setItem("costumer", JSON.stringify(costumer));
  };

  const tools = { sale, filteredItems, restItems, filterItem, removeFilteredItem, refreshFilteredItems, data, handleSelectCostumer, selectedCostumer, setQuantity };
  return <SalesContext.Provider value={tools}>{children}</SalesContext.Provider>;
}

export default SalesContextProvider;
