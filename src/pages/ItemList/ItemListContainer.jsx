import { Button } from "primereact/button";
import ItemList from "./ItemList";
import { useGetData } from "../../hooks/useGetData";
import { useRef, useState } from "react";
import { formatCurrency } from "../../utils/utils";
import ProductsApiCall from "../../services/products";
import ActionsDataTable from "../../components/Actions/ActionsDataTable";
import { InputField } from "../../components/InputField/InputField";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import { FileUpload } from "primereact/fileupload";
import { productsService } from "../../services";

function ItemListContainer() {
  const { data, setData, refreshData } = useGetData(productsService);
  const [editProducts, setEditProducts] = useState();
  const [filters, setFilters] = useState({ global: { value: null, matchMode: FilterMatchMode.CONTAINS } });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const [file, setFile] = useState("");
  const fileRef = useRef(null);

  const handleSelect = (filename) => {
    setFile(filename);
  };
  const handleRemove = () => {
    setFile("");
  };
  const emptyTemplate = () => <div>No se ha seleccionado un archivo.</div>;

  const uploadOptions = { style: { display: "none" } };

  const cancelOptions = { style: { display: !file && "none" } };

  const chooseOptions = { className: "bg-green-500 border-green-500" };

  const pt = { badge: { root: { style: { display: "none" } } } };

  const handleUpdateProduct = async (id) => {
    const name = document.getElementsByName("name")[0].value;
    const price = document.getElementsByName("price")[0].value.split("$")[1];
    const category = document.getElementsByName("category")[0].value;
    const stock = document.getElementsByName("stock")[0].value;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("stock", stock);
    formData.append("file", fileRef.current.getFiles()[0]);
    await ProductsApiCall.update(id, formData);

    setEditProducts(null);
    refreshData();
  };

  const nameBodyTemplate = (product) => {
    return editProducts === product.id ? <InputField inputName="name" input={product} /> : product.name;
  };

  const imageBodyTemplate = (product) => {
    return (
      <div className="flex flex-column gap-2 align-items-center">
        <img src={product?.thumbnail} alt={`Foto de ${product?.name}`} className="w-6rem h-6rem shadow-2 border-round" style={{ objectFit: "cover" }} />
        {editProducts === product?.id && <FileUpload chooseLabel="Subir Imagen" chooseOptions={chooseOptions} ref={fileRef} name="thumbnail" accept="image/*" multiple={false} maxFileSize={1000000} uploadOptions={uploadOptions} cancelOptions={cancelOptions} onSelect={handleSelect} onRemove={handleRemove} onClear={handleRemove} emptyTemplate={emptyTemplate} pt={pt} />}
      </div>
    );
  };

  const priceBodyTemplate = (product) => {
    return editProducts === product.id ? <InputField inputName="price" input={product} isNumber /> : formatCurrency(product.price);
  };
  const categoryBodyTemplate = (product) => {
    return editProducts === product.id ? <InputField inputName="category" input={product} /> : product.category;
  };

  const stockBodyTemplate = (product) => {
    return editProducts === product.id ? <InputField inputName="stock" input={product} isNumber /> : product.stock;
  };

  const actionsBodyTemplate = ({ id }) => {
    const actionsProps = { editingId: editProducts, id, handleUpdateRegister: handleUpdateProduct, updateRegister: updateProduct, deleteRegister: deleteProduct };
    return <ActionsDataTable {...actionsProps} deletion updating />;
  };

  const footer = `En total hay ${data ? data.length : 0} productos.`;

  const deleteProduct = async (id) => {
    const deletedProduct = await ProductsApiCall.delete(id);
    if (deletedProduct.status === "success") {
      const newData = data.filter((e) => e.id !== id);
      setData(newData);
    } else {
      console.log("error al eliminar el producto");
    }
  };

  const updateProduct = (id) => {
    setEditProducts(id);
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
            <Button onClick={refreshData} icon="pi pi-refresh" rounded raised />
          </div>
        </div>
      </>
    );
  };
  const header = renderHeader();
  const props = { imageBodyTemplate, priceBodyTemplate, header, footer, data, deleteProduct, actionsBodyTemplate, categoryBodyTemplate, stockBodyTemplate, nameBodyTemplate, filters };
  return <ItemList {...props} />;
}

export default ItemListContainer;
