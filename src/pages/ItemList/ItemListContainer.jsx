import { Button } from "primereact/button";
import ItemList from "./ItemList";
import { useGetData } from "../../hooks/useGetData";
import { useState } from "react";
import { formatCurrency } from "../../utils/utils";
import ProductsApiCall from "../../services/products";
import ActionsDataTable from "../../components/Actions/ActionsDataTable";
import { InputField } from "../../components/InputField/InputField";

function ItemListContainer() {
  const { data, setData, refreshData } = useGetData(ProductsApiCall);
  const [editProducts, setEditProducts] = useState();
  const handleUpdateProduct = async (id) => {
    const name = document.getElementsByName("name")[0].value;
    const price = document.getElementsByName("price")[0].value;
    const category = document.getElementsByName("category")[0].value;
    const stock = document.getElementsByName("stock")[0].value;
    const productData = { name, category, price: parseFloat(price.slice(1)), stock: parseInt(stock) };
    const updateProduct = await ProductsApiCall.update(id, productData);

    const productIndex = data.findIndex((e) => e.id === id);
    const newProducts = [...data];
    newProducts.splice(productIndex, 1, updateProduct);
    setData(newProducts);
    setEditProducts(null);
  };

  const nameBodyTemplate = (product) => {
    return editProducts === product.id ? <InputField inputName="name" input={product} /> : product.name;
  };

  const imageBodyTemplate = (product) => {
    return <img src={product.thumbnail} alt={`Foto de ${product.name}`} className="w-6rem h-6rem shadow-2 border-round" style={{ objectFit: "cover" }} />;
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

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Productos</span>
      <Button onClick={refreshData} icon="pi pi-refresh" rounded raised />
    </div>
  );
  const footer = `In total there are ${data ? data.length : 0} products.`;

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
  const props = { imageBodyTemplate, priceBodyTemplate, header, footer, data, deleteProduct, actionsBodyTemplate, categoryBodyTemplate, stockBodyTemplate, nameBodyTemplate };

  return <ItemList {...props} />;
}

export default ItemListContainer;
