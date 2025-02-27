import { Button } from "primereact/button";
import { exportSalesXlsx, exportToXlsx } from "../../helpers/exportXlsx";
import { useGetData } from "../../hooks/useGetData";
import { ordersService } from "../../services";
import { deleteIdFromData } from "../../helpers/deleteIdFromData";

function ExportButton({ data = [], filename, sales = [], is_sales = false }) {
  const [orders] = useGetData(ordersService);
  const dataWithNoId = deleteIdFromData(is_sales ? sales : data);
  const handleExport = () => {
    if (is_sales) return exportSalesXlsx(dataWithNoId, orders, filename);
    exportToXlsx(dataWithNoId, filename);
  };
  return <Button size="small" label="Exportar" severity="success" onClick={handleExport} />;
}

export default ExportButton;
