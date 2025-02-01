import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function SalesList({ data, header, footer, actionsBodyTemplate, amountBodyTemplate, expandedRows, showDataBodyTemplate, rowExpansionTemplate, filters }) {
  return (
    <DataTable value={data} filters={filters} removableSort paginator rows={5} header={header} footer={footer} expandedRows={expandedRows} rowExpansionTemplate={rowExpansionTemplate} dataKey="salesId" tableStyle={{ minWidth: "60rem" }}>
      <Column name="id" field="salesId" header="Número de Orden" sortable></Column>
      <Column name="costumer_name" field="name" header="Cliente" sortable></Column>
      <Column name="costumer_account_number" field="account_number" header="Número de Cuenta" sortable></Column>
      <Column name="total_amount" field="total_amount" header="Monto" body={amountBodyTemplate} sortable></Column>
      <Column body={showDataBodyTemplate}></Column>
      <Column body={actionsBodyTemplate}></Column>
    </DataTable>
  );
}
