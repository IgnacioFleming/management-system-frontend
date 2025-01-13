import { Button } from "primereact/button";
import { useGetData } from "../../hooks/useGetData";
import { useState } from "react";
import { formatCurrency } from "../../utils/utils";
import ActionsDataTable from "../../components/Actions/ActionsDataTable";
import OrdersApiCall from "../../services/orders";
import OrderList from "./OrdersList";
import { InputField } from "../../components/InputField/InputField";

function OrdersListContainer() {
  const { data, setData, refreshData } = useGetData(OrdersApiCall);
  const [editOrders, setEditOrders] = useState();
  const handleUpdateOrder = async (id) => {
    const quantity = document.getElementsByName("quantity")[0].value;
    await OrdersApiCall.update(id, { quantity: parseInt(quantity) });
    const newOrders = await OrdersApiCall.getAll();
    setData(newOrders);
    setEditOrders(null);
  };

  const quantityBodyTemplate = (order) => {
    return editOrders === order.id ? <InputField input={order} inputName="quantity" isNumber /> : order.quantity;
  };
  const priceBodyTemplate = (order) => formatCurrency(order.price);

  const amountBodyTemplate = (order) => formatCurrency(order.amount);

  const actionsBodyTemplate = ({ id }) => {
    const actionsProps = { editingId: editOrders, id, handleUpdateRegister: handleUpdateOrder, updateRegister: updateOrder, deleteRegister: deleteOrder };
    return <ActionsDataTable {...actionsProps} />;
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Órdenes</span>
      <Button onClick={refreshData} icon="pi pi-refresh" rounded raised />
    </div>
  );
  const footer = `In total there are ${data ? data.length : 0} Orders.`;

  const deleteOrder = async (id) => {
    const deletedOrder = await OrdersApiCall.delete(id);
    if (deletedOrder.status === "success") {
      const newData = data.filter((e) => e.id !== id);
      setData(newData);
    } else {
      console.log("error al eliminar el Ordero");
    }
  };

  const updateOrder = (id) => {
    setEditOrders(id);
  };
  const props = { header, footer, data, deleteOrder, actionsBodyTemplate, priceBodyTemplate, amountBodyTemplate, quantityBodyTemplate };

  return <OrderList {...props} />;
}

export default OrdersListContainer;
