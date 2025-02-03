import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { formatCurrency } from "../../utils/utils";
import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

function ProductPicker({ restItems, filterItem }) {
  const [filters, setFilters] = useState({ global: { value: null, matchMode: FilterMatchMode.CONTAINS } });
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const imageBodyTemplate = (product) => {
    return <img alt={product.name} src={product.thumbnail} style={{ width: 100, height: 100, objectFit: "contain" }} />;
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let inputValue = value;
    if (inputValue.startsWith("$")) inputValue = value.slice(1);
    inputValue = inputValue.replace(/(\.0{0,2})$/, "");
    let _filters = { ...filters };
    _filters["global"].value = inputValue;
    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <>
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
          <span className="text-xl text-900 font-bold">Productos</span>
          <div className="flex justify-content-end gap-2">
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search" />
              <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Buscar Producto" />
            </IconField>
          </div>
        </div>
      </>
    );
  };
  const header = renderHeader();

  return (
    <div className="flex flex-column align-items-center m-5 row-gap-5">
      <h2>Seleccione los productos para agregar a la orden</h2>
      <DataTable header={header} filters={filters} paginator rows={5} removableSort value={restItems} style={{ width: "80%" }}>
        <Column field="name" header="Producto" sortable></Column>
        <Column body={imageBodyTemplate}></Column>
        <Column field="price" header="Precio" body={(product) => formatCurrency(product.price)} sortable></Column>
        <Column field="stock" header="Stock" sortable></Column>
        <Column field="category" header="Categoría" sortable></Column>
        <Column body={(e) => <Button label="Agregar" onClick={() => filterItem(e)} />}></Column>
      </DataTable>
    </div>
  );
}

export default ProductPicker;
