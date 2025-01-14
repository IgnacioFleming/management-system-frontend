import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function SalesList({ data, header, footer, actionsBodyTemplate, amountBodyTemplate, showSaleData }) {
  return (
    <div className="card">
      <DataTable value={data} header={header} footer={footer} tableStyle={{ minWidth: "60rem" }}>
        <Column name="order_number" field="order_number" header="Número de Orden"></Column>
        <Column name="costumer_name" field="name" header="Cliente"></Column>
        <Column name="costumer_account_number" field="account_number" header="Número de Cuenta"></Column>
        <Column name="total_amount" field="total_amount" header="Monto" body={amountBodyTemplate}></Column>
        {/* <Column name="price" field="price" header="Precio" body={priceBodyTemplate}></Column> */}
        {/* <Column name="amount" field="amount" header="Total" body={amountBodyTemplate}></Column> */}
        <Column body={(sale) => <Button onClick={() => showSaleData(sale.order_number)}>Ver Detalle</Button>}></Column>

        <Column body={actionsBodyTemplate}></Column>
      </DataTable>
    </div>
  );
}
