import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function OrderList({ orders, footer, priceBodyTemplate, actionsBodyTemplate, amountBodyTemplate, quantityBodyTemplate }) {
  return (
    <div className="card">
      <DataTable value={orders} footer={footer} tableStyle={{ minWidth: "60rem" }}>
        <Column name="product_name" field="name" header="Producto"></Column>
        <Column name="product_category" field="category" header="Categoría"></Column>
        <Column name="quantity" field="quantity" header="Cantidad" body={quantityBodyTemplate}></Column>
        <Column name="price" field="price" header="Precio" body={priceBodyTemplate}></Column>
        <Column name="amount" field="amount" header="Total" body={amountBodyTemplate}></Column>
        <Column body={actionsBodyTemplate}></Column>
      </DataTable>
    </div>
  );
}
