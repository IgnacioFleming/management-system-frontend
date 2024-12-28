import { Button } from "primereact/button";
import ItemList from "./ItemList";
import { useGetProducts } from "../../hooks/useGetProducts";
import { useState } from "react";
import { InputField } from "./InputField";
import { formatCurrency } from "../../utils/utils";

function ItemListContainer() {
  const { products, setProducts, refreshProducts } = useGetProducts();
  const [editProducts, setEditProducts] = useState();
  const handleUpdateProduct = (id) => {
    const name = document.getElementsByName("name")[0].value;
    const price = document.getElementsByName("price")[0].value;
    const category = document.getElementsByName("category")[0].value;
    const stock = document.getElementsByName("stock")[0].value;
    const data = { name, category, price: parseFloat(price.slice(1)), stock: parseInt(stock) };
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        const productIndex = products.findIndex((e) => e.id === id);
        const newProducts = [...products];
        newProducts.splice(productIndex, 1, json.payload);
        console.log(newProducts);
        setProducts(newProducts);
      });
    setEditProducts(null);
  };

  const nameBodyTemplate = (product) => {
    return editProducts === product.id ? <InputField inputName="name" product={product} /> : product.name;
  };

  const imageBodyTemplate = (product) => {
    return <img src={product.thumbnail} alt={`Foto de ${product.name}`} className="w-6rem shadow-2 border-round" />;
  };

  const priceBodyTemplate = (product) => {
    return editProducts === product.id ? <InputField inputName="price" product={product} isNumber /> : formatCurrency(product.price);
  };
  const categoryBodyTemplate = (product) => {
    return editProducts === product.id ? <InputField inputName="category" product={product} /> : formatCurrency(product.category);
  };

  const stockBodyTemplate = (product) => {
    return editProducts === product.id ? <InputField inputName="stock" product={product} isNumber /> : product.stock;
  };

  const actionsBodyTemplate = ({ id }) => {
    if (editProducts === id) {
      return (
        <Button severity="warning" onClick={() => handleUpdateProduct(id)}>
          Guardar
        </Button>
      );
    }
    return (
      <div style={{ display: "flex", gap: 10 }}>
        <Button severity="info" onClick={() => updateProduct(id)}>
          <i className="pi pi-pen-to-square"></i>
        </Button>
        <Button severity="danger" onClick={() => deleteProduct(id)}>
          <i className="pi pi-trash"></i>
        </Button>
      </div>
    );
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Productos</span>
      <Button onClick={refreshProducts} icon="pi pi-refresh" rounded raised />
    </div>
  );
  const footer = `In total there are ${products ? products.length : 0} products.`;

  const deleteProduct = (id) => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => setProducts(json.payload));
  };

  const updateProduct = (id) => {
    setEditProducts(id);
  };
  const data = { imageBodyTemplate, priceBodyTemplate, header, footer, products, deleteProduct, actionsBodyTemplate, categoryBodyTemplate, stockBodyTemplate, nameBodyTemplate };

  return <ItemList {...data} />;
}

export default ItemListContainer;
