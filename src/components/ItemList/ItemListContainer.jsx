import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import ItemList from "./ItemList";
import { useGetProducts } from "../../hooks/useGetProducts";
import { useState } from "react";
import { InputText } from "primereact/inputtext";

function ItemListContainer() {
  const { products, refreshProducts } = useGetProducts();
  const [editeProducts, setEditProducts] = useState();
  const handleChange = (e) => e.target.value;
  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
  };

  const nameBodyTemplate = (product) => {
    if (editeProducts === product.id) {
      return <InputText onChange={handleChange} />;
    } else {
      return product.name;
    }
  };

  const imageBodyTemplate = (product) => {
    return <img src={product.thumbnail} alt={`Foto de ${product.name}`} className="w-6rem shadow-2 border-round" />;
  };

  const priceBodyTemplate = (product) => {
    if (editeProducts === product.id) {
      return <InputText keyfilter="int" />;
    } else {
      return formatCurrency(product.price);
    }
  };
  const categoryBodyTemplate = (product) => {
    if (editeProducts === product.id) {
      return <InputText />;
    } else {
      return product.category;
    }
  };

  const stockBodyTemplate = (product) => {
    if (editeProducts === product.id) {
      return <InputText keyfilter="int" />;
    } else {
      return product.stock;
    }
  };

  const statusBodyTemplate = (product) => {
    return <Tag style={{ width: 100 }} value={product.status} severity={getSeverity(product)}></Tag>;
  };
  const actionsBodyTemplate = ({ id }) => {
    if (editeProducts === id)
      return (
        <Button severity="warning" onClick={() => setEditProducts(null)}>
          Guardar
        </Button>
      );
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

  const getSeverity = (product) => {
    switch (product.status) {
      case "DELIVERED":
        return "success";

      case "PENDING":
        return "info ";

      case "PAYED":
        return "warning";

      case "REJECTED":
        return "danger";

      default:
        return null;
    }
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
      .then((json) => console.log(json));
  };

  const updateProduct = (id) => {
    setEditProducts(id);
  };
  const data = { imageBodyTemplate, priceBodyTemplate, statusBodyTemplate, header, footer, products, deleteProduct, actionsBodyTemplate, nameBodyTemplate, categoryBodyTemplate, stockBodyTemplate };

  return <ItemList {...data} />;
}

export default ItemListContainer;
