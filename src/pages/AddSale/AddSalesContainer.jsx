import { useContext, useState } from "react";
import OrderContextProvider, { OrderContext } from "../../contexts/orders";
import AddSales from "./AddSales";

function AddSalesContainer() {
  const { refreshFilteredItems } = useContext(O);
  const [selectedCostumer, setSelectedCostumer] = useState(JSON.parse(localStorage.getItem("costumer")) || null);

  const handleSelectCostumer = (costumer) => {
    setSelectedCostumer(costumer);
    if (!costumer) {
      refreshFilteredItems();
      return localStorage.removeItem("costumer");
    }
    localStorage.setItem("costumer", JSON.stringify(costumer));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sale = { costumer_id: selectedCostumer.id };
    console.log(sale);
  };
  const props = { handleSelectCostumer, handleSubmit, selectedCostumer };
  return (
    <OrderContextProvider>
      <AddSales {...props} />
    </OrderContextProvider>
  );
}

export default AddSalesContainer;
