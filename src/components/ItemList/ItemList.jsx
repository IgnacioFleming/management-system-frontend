import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function ItemList({ products, header, footer, imageBodyTemplate, priceBodyTemplate, statusBodyTemplate }) {
  return (
    <div className="card">
      <DataTable value={products} header={header} footer={footer} tableStyle={{ minWidth: "60rem" }}>
        <Column field="name" header="Name"></Column>
        <Column header="Image" body={imageBodyTemplate}></Column>
        <Column field="price" header="Price" body={priceBodyTemplate}></Column>
        <Column field="category" header="Category"></Column>
        <Column field="stock" header="Stock"></Column>
        {/* <Column field="costumer" header="Cliente"></Column>
        <Column header="Status" body={statusBodyTemplate}></Column> */}
        <Column body={<Button>Ver Detalle</Button>}></Column>
      </DataTable>
    </div>
  );
}
