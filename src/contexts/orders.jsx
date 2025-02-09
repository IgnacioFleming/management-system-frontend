import { createContext, useEffect, useState } from "react";
import { useFilter } from "../hooks/useFilter";
import { useGetData } from "../hooks/useGetData";
import { costumersService, productsService } from "../services";

export const SalesContext = createContext();

function SalesContextProvider({ children }) {
  const { data } = useGetData(costumersService);
  const { data: products } = useGetData(productsService);
  const { filteredItems, restItems, filterItem, removeFilteredItem, refreshFilteredItems } = useFilter(products, JSON.parse(localStorage.getItem("filteredItems")));
  const [productsIds, setProductsIds] = useState([]);
  const [selectedCostumer, setSelectedCostumer] = useState(JSON.parse(localStorage.getItem("costumer")) || null);
  const [sale, setSale] = useState(selectedCostumer?.id ? { costumer_id: selectedCostumer.id } : {});

  useEffect(() => {
    if (!selectedCostumer) return setSale({});
    const newSale = { ...sale, costumer_id: selectedCostumer.id };
    setSale(newSale);
  }, [selectedCostumer]);

  useEffect(() => {
    const newSale = { costumer_id: sale.costumer_id, products: productsIds, items_quantity: getItemsQuantity(productsIds), total_amount: getTotalAmount(productsIds) };
    setSale(newSale);
  }, [productsIds]);

  useEffect(() => {
    const product_ids = filteredItems.map((item) => {
      const previusProduct = productsIds.find((e) => e.id === item.id);
      const quantity = previusProduct ? previusProduct.quantity : 1;
      return { id: item.id, quantity, amount: item.price * quantity };
    });

    setProductsIds(product_ids);
  }, [filteredItems]);
  const getItemsQuantity = (array) => {
    const quantity = array.reduce((acc, { quantity }) => acc + quantity, 0);
    return quantity;
  };

  const getTotalAmount = (array) => {
    const totalAmount = array.reduce((acc, { amount }) => acc + amount, 0);
    return totalAmount;
  };

  const setQuantity = (item, newQuantity) => {
    if (sale.products) {
      const itemIndex = productsIds.findIndex((e) => e.id === item.id);
      if (itemIndex === -1) return;
      const newProductsIds = [...productsIds];
      newProductsIds[itemIndex].quantity = newQuantity;
      const price = filteredItems.find((e) => e.id === item.id).price;
      newProductsIds[itemIndex].amount = newQuantity * price;
      setProductsIds(newProductsIds);
    }
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
