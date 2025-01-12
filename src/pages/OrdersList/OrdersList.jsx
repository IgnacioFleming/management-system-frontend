import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function OrderList({ data, header, footer, actionsBodyTemplate }) {
  return (
    <div className="card">
      <DataTable value={data} header={header} footer={footer} tableStyle={{ minWidth: "60rem" }}>
        <Column field="order_number" header="Name"></Column>
        <Column field="product_id" header="Image"></Column>
        <Column field="quantity" header="Price"></Column>
        <Column field="amount" header="Category"></Column>
        <Column body={<Button>Ver Detalle</Button>}></Column>
        <Column body={actionsBodyTemplate}></Column>
      </DataTable>
    </div>
  );
}
