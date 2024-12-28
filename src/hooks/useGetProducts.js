import { useEffect, useState } from "react";
import ProductsApiCall from "../services/products";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    refreshProducts();
  }, []);
  const refreshProducts = async () => {
    const retrievedProducts = await ProductsApiCall.getAll();
    setProducts(retrievedProducts);
  };
  return { products, refreshProducts, setProducts };
};
