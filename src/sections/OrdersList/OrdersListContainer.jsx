import { useState } from "react";
import { formatCurrency } from "../../utils/utils";
import ActionsDataTable from "../../components/Actions/ActionsDataTable";
import OrdersApiCall from "../../services/orders";
import OrderList from "./OrdersList";
import { InputField } from "../../components/InputField/InputField";
import { useGetOrdersBySaleId } from "../../hooks/useGetOrdersBySaleId";

function OrdersListContainer({ sale_id, refreshData }) {
  const { orders, setOrders } = useGetOrdersBySaleId(sale_id);
  const [editOrders, setEditOrders] = useState();
  const handleUpdateOrder = async (id) => {
    const quantity = document.getElementsByName("quantity")[0].value;
    await OrdersApiCall.update(id, { quantity: parseInt(quantity) });
    const newOrders = await OrdersApiCall.getOrdersBySaleId(sale_id);
    setOrders(newOrders);
    setEditOrders(null);
    refreshData();
  };

  const quantityBodyTemplate = (order) => {
    return editOrders === order.id ? <InputField input={order} inputName="quantity" isNumber /> : order.quantity;
  };
  const priceBodyTemplate = (order) => formatCurrency(order.price);

  const amountBodyTemplate = (order) => formatCurrency(order.amount);

  const actionsBodyTemplate = ({ id }) => {
    const actionsProps = { editingId: editOrders, id, handleUpdateRegister: handleUpdateOrder, updateRegister: updateOrder, deleteRegister: deleteOrder };
    return <ActionsDataTable {...actionsProps} deletion updating />;
  };

  const footer = `Cantidad de Productos: ${orders ? orders.length : 0}`;

  const deleteOrder = async (id) => {
    const deletedOrder = await OrdersApiCall.delete(id);
    if (deletedOrder.status === "success") {
      const newData = orders.filter((e) => e.id !== id);
      setOrders(newData);
    } else {
      console.log("error al eliminar el Ordero");
    }
  };

  const updateOrder = (id) => {
    setEditOrders(id);
  };

  const props = { footer, orders, deleteOrder, actionsBodyTemplate, priceBodyTemplate, amountBodyTemplate, quantityBodyTemplate };

  return <OrderList {...props} />;
}

export default OrdersListContainer;
