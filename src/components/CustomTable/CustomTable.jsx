import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ExportButton from "../ExportButton/ExportButton";

function CustomTable({ header, columns, items, path, extractionFilename, filters, paginator, rows, getBodyTemplate, detailButtonTemplate, actionsBodyTemplate, footer }) {
  return (
    <DataTable removableSort paginator={paginator} rows={rows} header={header} value={items} filters={filters} footer={footer}>
      {columns.map(({ label, field, sortable = false }, index) => {
        const body = getBodyTemplate(field);
        return <Column key={index} header={label} field={field} body={body} sortable={sortable}></Column>;
      })}
      {path && <Column body={detailButtonTemplate}></Column>}
      <Column header={extractionFilename && <ExportButton data={items} filename={extractionFilename} />} body={actionsBodyTemplate}></Column>
    </DataTable>
  );
}

export default CustomTable;
