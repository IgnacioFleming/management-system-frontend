import { useState } from "react";
import { formatCurrency } from "../../utils/utils";
import ActionsDataTable from "../../components/Actions/ActionsDataTable";
import OrderList from "./OrdersList";
import { InputField } from "../../components/InputField/InputField";
import { useGetOrdersBySaleId } from "../../hooks/useGetOrdersBySaleId";
import { ordersService } from "../../services";

function OrdersListContainer({ sale_id }) {
  const { orders, refreshData } = useGetOrdersBySaleId(sale_id);
  console.log(orders);
  const [editOrders, setEditOrders] = useState();
  const handleUpdateOrder = async (id) => {
    const quantity = document.getElementsByName("quantity")[0].value;
    await ordersService.update(id, { quantity: parseInt(quantity) });
    setEditOrders(null);
    await refreshData(sale_id);
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
    await ordersService.delete(id);
    await refreshData(sale_id);
  };

  const updateOrder = (id) => {
    setEditOrders(id);
  };

  const props = { footer, orders, deleteOrder, actionsBodyTemplate, priceBodyTemplate, amountBodyTemplate, quantityBodyTemplate };

  return <OrderList {...props} />;
}

export default OrdersListContainer;
