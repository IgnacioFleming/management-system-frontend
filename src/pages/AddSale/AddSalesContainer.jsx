import { useContext } from "react";
import { SalesContext } from "../../contexts/orders";
import AddSales from "./AddSales";
import { salesService } from "../../services";
import Alerts from "../../helpers/alerts/alerts";
import { API_Status_List } from "../../helpers/utils";

function AddSalesContainer() {
  const { sale, costumers, filteredItems, removeFilteredItem, restItems, filterItem, handleSelectCostumer, selectedCostumer, refreshSaleItems } = useContext(SalesContext);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await Alerts.addItem({ title: "Crear Venta", text: "Deseas crear esta venta?", confirmCallback: async () => await salesService.create(sale), hasCancellation: true });
      if (res.status === API_Status_List.ERROR) return await Alerts.errorToast();
      refreshSaleItems();
      return await Alerts.successToast();
    } catch (error) {
      await Alerts.errorToast({ text: error });
    }
  };
  const props = { costumers, filteredItems, removeFilteredItem, restItems, filterItem, handleSubmit, handleSelectCostumer, selectedCostumer };
  return <AddSales {...props} />;
}

export default AddSalesContainer;
