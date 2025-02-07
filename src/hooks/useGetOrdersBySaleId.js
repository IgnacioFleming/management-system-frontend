import { useEffect, useState } from "react";
import OrdersApiCall from "../services/orders";

export const useGetOrdersBySaleId = (sale_id) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (!sale_id) return;
    getOrdersBySaleId(sale_id);
  }, [sale_id]);
  const getOrdersBySaleId = async (sale_id) => {
    const newOrders = await OrdersApiCall.getOrdersBySaleId(sale_id);
    setOrders(newOrders);
  };

  return { orders, setOrders };
};
