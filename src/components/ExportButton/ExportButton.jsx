import { Button } from "primereact/button";
import { exportToXlsx } from "../../helpers/exportXlsx";

function ExportButton({ data = [], filename }) {
  const newData = data.map((item) => {
    const newItem = { ...item };
    delete newItem.id;
    return newItem;
  });
  const handleExport = () => {
    exportToXlsx(newData, filename);
  };
  return <Button label="Exportar" severity="success" onClick={handleExport} />;
}

export default ExportButton;
