import { useContext } from "react";
import { SalesContext } from "../../contexts/sales";
import AddSales from "./AddSales";
import { salesService } from "../../services";
import Alerts from "../../helpers/alerts/alerts";
import { API_Status_List } from "../../helpers/utils";

function AddSalesContainer() {
  const { state, filterItem, removeFilteredItem, handleSelectCostumer, refreshSaleItems } = useContext(SalesContext);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await Alerts.addItem({ title: "Add Sale", text: "Do you want to add this sale?", confirmCallback: async () => await salesService.create(state.sale), hasCancellation: true });
      if (res.status === API_Status_List.ERROR) return await Alerts.errorToast();
      refreshSaleItems();
      return await Alerts.successToast();
    } catch (error) {
      await Alerts.errorToast({ text: error });
    }
  };
  const props = { state, removeFilteredItem, filterItem, handleSubmit, handleSelectCostumer };
  return <AddSales {...props} />;
}

export default AddSalesContainer;
