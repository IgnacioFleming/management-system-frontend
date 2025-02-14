import { useGetData } from "../../hooks/useGetData";
import { useRef } from "react";
import { productsService } from "../../services";
import CustomTableContainer from "../../components/CustomTable/CustomTableContainer";
const columns = [
  { label: "Nombre", field: "name", sortable: true },
  { label: "Imagen", field: "thumbnail", sortable: false },
  { label: "Precio", field: "price", sortable: true },
  { label: "Categoría", field: "category", sortable: true },
  { label: "Stock", field: "stock", sortable: true },
];
function ItemList() {
  const [products, getProducts] = useGetData(productsService);
  const fileRef = useRef(null);

  const handleUpdateProduct = async (id) => {
    const name = document.getElementsByName("name")[0].value;
    const price = document.getElementsByName("price")[0].value;
    const category = document.getElementsByName("category")[0].value;
    const stock = document.getElementsByName("stock")[0].value;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("stock", stock);
    formData.append("file", fileRef.current.getFiles()[0]);
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
