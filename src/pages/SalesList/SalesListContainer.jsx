import { Button } from "primereact/button";
import { useGetData } from "../../hooks/useGetData";
import { useState } from "react";
import { formatCurrency } from "../../utils/utils";
import ActionsDataTable from "../../components/Actions/ActionsDataTable";
import SalesApiCall from "../../services/sales";
import SalesList from "./SalesList";
import OrdersListContainer from "../../sections/OrdersList/OrdersListContainer";

function SalesListContainer() {
  const { data, setData, refreshData } = useGetData(SalesApiCall);
  const [orderNumber, setOrderNumber] = useState();
  const [editSales, setEditSales] = useState();
  const [expandedRows, setExpandedRows] = useState(null);

  const showSaleDetail = (salesId) => {
    if (orderNumber === salesId) {
      setOrderNumber(null);
      setExpandedRows(null);
      return;
    }
    setOrderNumber(salesId);
    setExpandedRows({ [salesId]: true });
  };

  const rowExpansionTemplate = () => {
    return (
      // <div className="card">
      <OrdersListContainer order_number={orderNumber} refreshData={refreshData} />
      // </div>
    );
  };
  const showDataBodyTemplate = (sale) => {
    return (
      <Button severity={orderNumber === sale.salesId && "danger"} onClick={() => showSaleDetail(sale.salesId)}>
        {orderNumber === sale.salesId ? "Ocultar Detalle" : "Ver Detalle"}
      </Button>
    );
  };

  const amountBodyTemplate = (sale) => formatCurrency(sale.total_amount);

  const actionsBodyTemplate = ({ salesId }) => {
    const actionsProps = { editingId: editSales, id: salesId, updateRegister: updateSale, deleteRegister: deleteSale };
    return <ActionsDataTable {...actionsProps} deletion />;
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Ventas</span>
      <Button onClick={refreshData} icon="pi pi-refresh" rounded raised />
    </div>
  );
  const footer = `In total there are ${data ? data.length : 0} Sales.`;

  const deleteSale = async (id) => {
    const deletedSale = await SalesApiCall.delete(id);
    if (deletedSale.status === "success") {
      const newData = data.filter((e) => e.salesId !== id);
      setData(newData);
    } else {
      console.log("error al eliminar el Saleo");
    }
  };

  const updateSale = (id) => {
    setEditSales(id);
  };
  const props = { header, footer, data, actionsBodyTemplate, amountBodyTemplate, orderNumber, showDataBodyTemplate, rowExpansionTemplate, expandedRows };

  return <SalesList {...props} />;
}

export default SalesListContainer;
