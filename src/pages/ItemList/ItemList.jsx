import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function ItemList({ data, header, footer, imageBodyTemplate, priceBodyTemplate, actionsBodyTemplate, nameBodyTemplate, categoryBodyTemplate, stockBodyTemplate, filters }) {
  return (
    <div className="card">
      <DataTable value={data} removableSort header={header} filters={filters} footer={footer} tableStyle={{ minWidth: "60rem" }}>
        <Column field="name" header="Name" body={nameBodyTemplate} sortable></Column>
        <Column header="Image" body={imageBodyTemplate}></Column>
        <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
        <Column field="category" header="Category" body={categoryBodyTemplate} sortable></Column>
        <Column field="stock" header="Stock" body={stockBodyTemplate} sortable></Column>
        <Column body={<Button>Ver Detalle</Button>}></Column>
        <Column body={actionsBodyTemplate}></Column>
      </DataTable>
    </div>
  );
}
