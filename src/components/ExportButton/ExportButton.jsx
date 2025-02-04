import { Button } from "primereact/button";
import { CSVLink } from "react-csv";

function ExportButton({ data, filename, headers }) {
  return (
    <CSVLink data={data} filename={filename} headers={headers || false}>
      <Button label="Exportar" severity="success" />
    </CSVLink>
  );
}

export default ExportButton;
