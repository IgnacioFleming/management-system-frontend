import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function CustomTable({ items }) {
  const columns = [];
  return (
    <DataTable value={items}>
      {columns.map((column) => {
        return <Column></Column>;
      })}
    </DataTable>
  );
}

export default CustomTable;
