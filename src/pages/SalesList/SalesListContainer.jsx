import { Button } from "primereact/button";
import { useGetData } from "../../hooks/useGetData";
import { useState } from "react";
import { formatCurrency } from "../../utils/utils";
import ActionsDataTable from "../../components/Actions/ActionsDataTable";
import SalesApiCall from "../../services/sales";
import SalesList from "./SalesList";
import OrdersListContainer from "../../sections/OrdersList/OrdersListContainer";
import { FilterMatchMode } from "primereact/api";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

function SalesListContainer() {
  const { data, setData, refreshData } = useGetData(SalesApiCall);
  const [orderNumber, setOrderNumber] = useState();
  const [editSales, setEditSales] = useState();
  const [expandedRows, setExpandedRows] = useState(null);
  const [filters, setFilters] = useState({ global: { value: null, matchMode: FilterMatchMode.CONTAINS } });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

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

  const footer = `En total hay ${data ? data.length : 0} Ventas.`;

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

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let inputValue = value;
    if (inputValue.startsWith("$")) inputValue = value.slice(1);
    inputValue = inputValue.replace(/(\.0{0,2})$/, "");
    console.log(inputValue, "after replace");
    let _filters = { ...filters };
    _filters["global"].value = inputValue;
    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <>
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
          <span className="text-xl text-900 font-bold">Ventas</span>
          <div className="flex justify-content-end gap-2">
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search" />
              <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Buscar en Ventas" />
            </IconField>
            <Button onClick={refreshData} icon="pi pi-refresh" rounded raised />
          </div>
        </div>
      </>
    );
  };
  const header = renderHeader();
  const props = { header, footer, data, actionsBodyTemplate, amountBodyTemplate, orderNumber, showDataBodyTemplate, rowExpansionTemplate, expandedRows, filters };

  return <SalesList {...props} />;
}

export default SalesListContainer;
