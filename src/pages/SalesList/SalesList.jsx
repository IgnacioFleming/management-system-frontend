import CustomTableContainer from "../../components/CustomTable/CustomTableContainer";
import { salesService } from "../../services";
import { useGetData } from "../../hooks/useGetData";
import { customColors, inputTypes } from "../../helpers/utils";
import { useState } from "react";
import OrderList from "../../sections/OrdersList/OrdersList";

const columns = [
  { label: "Sale ID", field: "salesId", sortable: true },
  { label: "Costumer", field: "name", sortable: true },
  { label: "Account Number", field: "account_number", sortable: true },
  { label: "Amount", field: "total_amount", sortable: true, inputType: inputTypes.CURR },
  { label: "Sale Cost", field: "sale_cost", sortable: true, inputType: inputTypes.CURR, color: customColors.DANGER },
  { label: "Sale Date", field: "sale_date", sortable: true, inputType: inputTypes.DATE },
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
  return <CustomTableContainer dataKey="salesId" columns={columns} items={sales} label="Sales" extractionFilename="sales.xlsx" paginator rows={5} deletion handleDelete={deleteSale} handleDetail={showSaleDetail} expandedRows={expandedRows} refreshItems={getSales} is_sales InnerComponent={<OrderList sale_id={orderNumber} refreshSales={getSales} />} />;
}
