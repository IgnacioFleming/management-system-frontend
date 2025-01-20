import { useContext } from "react";
import { SalesContext } from "../../contexts/orders";
import AddSales from "./AddSales";

function AddSalesContainer() {
  const { sale, data, filteredItems, removeFilteredItem, restItems, filterItem, handleSelectCostumer, selectedCostumer } = useContext(SalesContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(sale);
  };
  const props = { data, filteredItems, removeFilteredItem, restItems, filterItem, handleSubmit, handleSelectCostumer, selectedCostumer };
  return <AddSales {...props} />;
}

export default AddSalesContainer;
