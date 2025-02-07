import { Button } from "primereact/button";
import { exportSalesXlsx, exportToXlsx } from "../../helpers/exportXlsx";
import OrdersApiCall from "../../services/orders";
import { useGetData } from "../../hooks/useGetData";

function ExportButton({ data = [], filename, sales = [], is_sales = false }) {
  const { data: orders } = useGetData(OrdersApiCall);
  let newSales;
  let newData;
  if (is_sales) {
    newSales = sales.map((item) => {
      const newItem = { ...item };
      delete newItem.id;
      return newItem;
    });
  } else {
    newData = data.map((item) => {
      const newItem = { ...item };
      delete newItem.id;
      return newItem;
    });
  }
  const handleExport = () => {
    if (is_sales) return exportSalesXlsx(newSales, orders, filename);
    exportToXlsx(newData, filename);
  };
  return <Button label="Exportar" severity="success" onClick={handleExport} />;
}

export default ExportButton;
