import CustomTableContainer from "../../components/CustomTable/CustomTableContainer";
import { salesService } from "../../services";
import { useGetData } from "../../hooks/useGetData";
import { customColors, inputTypes } from "../../helpers/utils";
import { useState } from "react";
import OrderList from "../../sections/OrdersList/OrdersList";

const columns = [
  { label: "Número de Orden", field: "salesId", sortable: true },
  { label: "Cliente", field: "name", sortable: true },
  { label: "Número de Cuenta", field: "account_number", sortable: true },
  { label: "Monto", field: "total_amount", sortable: true, inputType: inputTypes.CURR },
  { label: "Costo de Venta", field: "sale_cost", sortable: true, inputType: inputTypes.CURR, color: customColors.DANGER },
];

export default function SalesList() {
  const [sales, getSales] = useGetData(salesService);
  const [expandedRows, setExpandedRows] = useState(null);
  const [orderNumber, setOrderNumber] = useState();

  const showSaleDetail = (salesId) => {
    if (orderNumber === salesId) {
      setOrderNumber(null);
      setExpandedRows(null);
      return;
    }
    setOrderNumber(salesId);
    setExpandedRows({ [salesId]: true });
  };

  const deleteSale = async (id) => {
    await salesService.delete(id);
    getSales();
  };
  return <CustomTableContainer dataKey="salesId" columns={columns} items={sales} label="Ventas" extractionFilename="sales.xlsx" paginator rows={5} deletion handleDelete={deleteSale} handleDetail={showSaleDetail} expandedRows={expandedRows} refreshItems={getSales} is_sales InnerComponent={<OrderList sale_id={orderNumber} refreshSales={getSales} />} />;
}
