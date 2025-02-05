import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ExportButton from "../../components/ExportButton/ExportButton";

export default function OrderList({ orders, footer, priceBodyTemplate, actionsBodyTemplate, amountBodyTemplate, quantityBodyTemplate }) {
  return (
    <div className="card">
      <DataTable value={orders} removableSort footer={footer} tableStyle={{ minWidth: "60rem" }}>
        <Column name="product_name" field="name" header="Producto" sortable></Column>
        <Column name="product_category" field="category" header="Categoría" sortable></Column>
        <Column name="quantity" field="quantity" header="Cantidad" body={quantityBodyTemplate} sortable></Column>
        <Column name="price" field="price" header="Precio" body={priceBodyTemplate} sortable></Column>
        <Column name="amount" field="amount" header="Total" body={amountBodyTemplate} sortable></Column>
        <Column header={<ExportButton data={orders} filename="orders.xlsx" />} body={actionsBodyTemplate}></Column>
      </DataTable>
    </div>
  );
}
