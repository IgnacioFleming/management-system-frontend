import { useContext } from "react";
import { SalesContext } from "../../contexts/orders";
import AddSales from "./AddSales";
import { salesService } from "../../services";

function AddSalesContainer() {
  const { sale, data, filteredItems, removeFilteredItem, restItems, filterItem, handleSelectCostumer, selectedCostumer } = useContext(SalesContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await salesService.create(sale);
  };
  const props = { data, filteredItems, removeFilteredItem, restItems, filterItem, handleSubmit, handleSelectCostumer, selectedCostumer };
  return <AddSales {...props} />;
}

export default AddSalesContainer;
