import { useEffect, useState } from "react";
import OrdersApiCall from "../services/orders";

export const useGetOrdersByOrderNumber = (order_number) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (!order_number) return;
    const orders = getOrdersByOrderNumber(order_number);
    setOrders(orders);
  }, [order_number]);
  const getOrdersByOrderNumber = async (order_number) => {
    const orders = await OrdersApiCall.getOrdersByOrderNumber(order_number);
    return orders;
  };
  return orders;
};
