import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { formatCurrency } from "../../utils/utils";

function ProductPicker({ restItems, filterItem }) {
  const imageBodyTemplate = (product) => {
    return <img alt={product.name} src={product.thumbnail} style={{ width: 100, height: 100, objectFit: "contain" }} />;
  };

  return (
    <div className="flex flex-column align-items-center m-5 row-gap-5">
      <h2>Seleccione los productos para agregar a la orden</h2>
      <DataTable value={restItems} style={{ width: "80%" }}>
        <Column field="name" header="Producto"></Column>
        <Column body={imageBodyTemplate}></Column>
        <Column field="price" header="Precio" body={(product) => formatCurrency(product.price)}></Column>
        <Column field="stock" header="Stock"></Column>
        <Column field="category" header="Categoría"></Column>
        <Column body={(e) => <Button label="Agregar" onClick={() => filterItem(e)} />}></Column>
      </DataTable>
    </div>
  );
}

export default ProductPicker;
