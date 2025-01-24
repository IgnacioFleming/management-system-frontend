import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function SalesList({ data, header, footer, actionsBodyTemplate, amountBodyTemplate, expandedRows, showDataBodyTemplate, rowExpansionTemplate }) {
  return (
    <DataTable value={data} header={header} footer={footer} expandedRows={expandedRows} rowExpansionTemplate={rowExpansionTemplate} dataKey="salesId" tableStyle={{ minWidth: "60rem" }}>
      <Column name="id" field="salesId" header="Número de Orden"></Column>
      <Column name="costumer_name" field="name" header="Cliente"></Column>
      <Column name="costumer_account_number" field="account_number" header="Número de Cuenta"></Column>
      <Column name="total_amount" field="total_amount" header="Monto" body={amountBodyTemplate}></Column>
      <Column body={showDataBodyTemplate}></Column>
      <Column body={actionsBodyTemplate}></Column>
    </DataTable>
  );
}
