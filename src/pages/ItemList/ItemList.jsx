import { useGetData } from "../../hooks/useGetData";
import { useRef } from "react";
import { productsService } from "../../services";
import CustomTableContainer from "../../components/CustomTable/CustomTableContainer";
import { inputTypes } from "../../helpers/utils";
import { getProductInputs } from "../../helpers/getProductInputs";

const columns = [
  { label: "Nombre", field: "name", sortable: true, isEditable: true },
  { label: "Imagen", field: "thumbnail", sortable: false },
  { label: "Precio", field: "price", sortable: true, isEditable: true, inputType: inputTypes.CURR },
  { label: "Categoría", field: "category", sortable: true, isEditable: true },
  { label: "Stock", field: "stock", sortable: true, isNumber: true, isEditable: true },
];
function ItemList() {
  const [products, getProducts] = useGetData(productsService);
  const fileRef = useRef(null);

  const handleUpdateProduct = async (id) => {
    const formData = getProductInputs(fileRef);
    await productsService.update(id, formData);
    getProducts();
  };

  const handleDeleteProduct = async (id) => {
    await productsService.delete(id);
    getProducts();
  };

  const props = {
    label: "Productos",
    columns,
    items: products,
    refreshItems: getProducts,
    path: "/products",
    extractionFilename: "products.xlsx",
    paginator: true,
    rows: 5,
    updating: true,
    handleUpdate: handleUpdateProduct,
    deletion: true,
    handleDelete: handleDeleteProduct,
    ptRef: fileRef,
  };

  return <CustomTableContainer {...props} />;
}

export default ItemList;
