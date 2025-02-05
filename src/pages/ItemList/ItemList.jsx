import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import ExportButton from "../../components/ExportButton/ExportButton";

export default function ItemList({ data, header, footer, imageBodyTemplate, priceBodyTemplate, actionsBodyTemplate, nameBodyTemplate, categoryBodyTemplate, stockBodyTemplate, filters }) {
  return (
    <div className="card">
      <DataTable value={data} removableSort paginator rows={5} header={header} filters={filters} footer={footer} tableStyle={{ minWidth: "60rem" }}>
        <Column field="name" header="Name" body={nameBodyTemplate} sortable></Column>
        <Column header="Image" body={imageBodyTemplate}></Column>
        <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
        <Column field="category" header="Category" body={categoryBodyTemplate} sortable></Column>
        <Column field="stock" header="Stock" body={stockBodyTemplate} sortable></Column>
        <Column
          body={(prod) => (
            <Link to={`/products/${prod.id}`}>
              <Button label="Ver Detalle" />
            </Link>
          )}
        ></Column>
        <Column header={<ExportButton data={data} filename="products.xlsx" />} body={actionsBodyTemplate}></Column>
      </DataTable>
    </div>
  );
}
