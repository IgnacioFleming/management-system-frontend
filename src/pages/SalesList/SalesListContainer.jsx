import { Button } from "primereact/button";
import { useGetData } from "../../hooks/useGetData";
import { useState } from "react";
import { formatCurrency } from "../../utils/utils";
import ActionsDataTable from "../../components/Actions/ActionsDataTable";
import SalesApiCall from "../../services/sales";
import SalesList from "./SalesList";
import { useGetOrdersByOrderNumber } from "../../hooks/useGetOrdersByOrderNumber";

function SalesListContainer() {
  const { data, setData, refreshData } = useGetData(SalesApiCall);
  const [orderNumber, setOrderNumber] = useState();
  const [editSales, setEditSales] = useState();
  const orders = useGetOrdersByOrderNumber(orderNumber);
  console.log(orders);
  const showSaleData = async (order_number) => {
    setOrderNumber(order_number);
  };

  const amountBodyTemplate = (sale) => formatCurrency(sale.total_amount);

  const actionsBodyTemplate = ({ id }) => {
    const actionsProps = { editingId: editSales, id, updateRegister: updateSale, deleteRegister: deleteSale };
    return <ActionsDataTable {...actionsProps} />;
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Órdenes</span>
      <Button onClick={refreshData} icon="pi pi-refresh" rounded raised />
    </div>
  );
  const footer = `In total there are ${data ? data.length : 0} Sales.`;

  const deleteSale = async (id) => {
    const deletedSale = await SalesApiCall.delete(id);
    if (deletedSale.status === "success") {
      const newData = data.filter((e) => e.id !== id);
      setData(newData);
    } else {
      console.log("error al eliminar el Saleo");
    }
  };

  const updateSale = (id) => {
    setEditSales(id);
  };
  const props = { header, footer, data, deleteSale, actionsBodyTemplate, amountBodyTemplate, showSaleData };

  return <SalesList {...props} />;
}

export default SalesListContainer;
