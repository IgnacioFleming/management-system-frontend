import { useEffect, useState } from "react";
import mockProducts from "../../assets/mockProducts";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
  };

  const imageBodyTemplate = (product) => {
    return <img src={product.thumbnail} alt={`Foto de ${product.name}`} className="w-6rem shadow-2 border-round" />;
  };

  const priceBodyTemplate = (product) => {
    return formatCurrency(product.price);
  };

  // const ratingBodyTemplate = (product) => {
  //   return <Rating value={product.rating} readOnly cancel={false} />;
  // };

  const statusBodyTemplate = (product) => {
    return <Tag style={{ width: 100 }} value={product.status} severity={getSeverity(product)}></Tag>;
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
      <Button icon="pi pi-refresh" rounded raised />
    </div>
  );
  const footer = `In total there are ${products ? products.length : 0} products.`;

  const data = { imageBodyTemplate, priceBodyTemplate, statusBodyTemplate, header, footer, products };

  return <ItemList {...data} />;
}

export default ItemListContainer;
