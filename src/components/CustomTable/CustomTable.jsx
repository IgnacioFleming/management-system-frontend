import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ExportButton from "../ExportButton/ExportButton";

function CustomTable({ header, columns, items, showDetailButton = false, extractionFilename, filters, paginator, rows, getBodyTemplate, detailButtonTemplate, actionsBodyTemplate, expandedRows, rowExpansionTemplate, dataKey, footer }) {
  return (
    <DataTable frozenWidth="100px" removableSort paginator={paginator} rows={rows} header={header} value={items} filters={filters} expandedRows={expandedRows} rowExpansionTemplate={rowExpansionTemplate} dataKey={dataKey} footer={footer} pt={{ paginator: { root: { className: "w-full p-0" } } }}>
      {columns?.map(({ label, field, sortable = false, isEditable = false, inputType, color }, index) => {
        const body = getBodyTemplate(field, isEditable, inputType, color);
        return <Column key={index} header={label} field={field} body={body} sortable={sortable}></Column>;
      })}
      {showDetailButton && <Column header={extractionFilename && <ExportButton data={items} filename={extractionFilename} />} body={detailButtonTemplate}></Column>}
      <Column header={!showDetailButton && extractionFilename && <ExportButton data={items} filename={extractionFilename} />} body={actionsBodyTemplate}></Column>
    </DataTable>
  );
}

export default CustomTable;
