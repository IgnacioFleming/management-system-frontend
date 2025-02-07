import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ExportButton from "../../components/ExportButton/ExportButton";

export default function SalesList({ data, header, footer, actionsBodyTemplate, amountBodyTemplate, expandedRows, showDataBodyTemplate, rowExpansionTemplate, filters }) {
  const exportHeaders = [
    { label: "Id de Venta", key: "id" },
    { label: "Id de Cliente", key: "costumer_id" },
    { label: "Nombre", key: "name" },
    { label: "Número de cuenta", key: "account_number" },
    { label: "Url de imagen", key: "logo" },
    { label: "Cantidad de items", key: "items_quantity" },
    { label: "Monto Total", key: "total_amount" },
    { label: "Fecha", key: "sale_date" },
  ];
  return (
    <DataTable value={data} filters={filters} removableSort paginator rows={5} header={header} footer={footer} expandedRows={expandedRows} rowExpansionTemplate={rowExpansionTemplate} dataKey="salesId" tableStyle={{ minWidth: "60rem" }}>
      <Column name="id" field="salesId" header="Número de Orden" sortable></Column>
      <Column name="costumer_name" field="name" header="Cliente" sortable></Column>
      <Column name="costumer_account_number" field="account_number" header="Número de Cuenta" sortable></Column>
      <Column name="total_amount" field="total_amount" header="Monto" body={amountBodyTemplate} sortable></Column>
      <Column body={showDataBodyTemplate}></Column>
      <Column header={<ExportButton is_sales sales={data} orders={expandedRows} filename="sales.xlsx" headers={exportHeaders} />} body={actionsBodyTemplate}></Column>
    </DataTable>
  );
}
