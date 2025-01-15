import { useEffect, useState } from "react";
import OrdersApiCall from "../services/orders";

export const useGetOrdersByOrderNumber = (order_number) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (!order_number) return;
    getOrdersByOrderNumber(order_number);
  }, [order_number]);
  const getOrdersByOrderNumber = async (order_number) => {
    const newOrders = await OrdersApiCall.getOrdersByOrderNumber(order_number);
    setOrders(newOrders);
  };

  return { orders, setOrders };
};
