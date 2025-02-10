import { useEffect, useState } from "react";
import { ordersService } from "../services";

export const useGetOrdersBySaleId = (sale_id) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (!sale_id) return;
    refreshData(sale_id);
  }, [sale_id]);
  const refreshData = async (sale_id) => {
    const newOrders = await ordersService.getById(sale_id);
    setOrders(newOrders);
  };
  return { orders, setOrders, refreshData };
};
