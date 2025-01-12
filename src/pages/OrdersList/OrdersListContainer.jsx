import { Button } from "primereact/button";
import { useGetData } from "../../hooks/useGetData";
import { useState } from "react";
import { formatCurrency } from "../../utils/utils";
import ActionsDataTable from "../../components/Actions/ActionsDataTable";
import { InputField } from "../../components/InputField/InputField";
import OrdersApiCall from "../../services/orders";
import OrderList from "./OrdersList";

function OrdersListContainer() {
  const { data, setData, refreshData } = useGetData(OrdersApiCall);
  console.log(data);
  const [editOrders, setEditOrders] = useState();
  const handleUpdateOrder = async (id) => {
    const name = document.getElementsByName("name")[0].value;
    const price = document.getElementsByName("price")[0].value;
    const category = document.getElementsByName("category")[0].value;
    const stock = document.getElementsByName("stock")[0].value;
    const OrderData = { name, category, price: parseFloat(price.slice(1)), stock: parseInt(stock) };
    const updateOrder = await OrdersApiCall.update(id, OrderData);

    const OrderIndex = data.findIndex((e) => e.id === id);
    const newOrders = [...data];
    newOrders.splice(OrderIndex, 1, updateOrder);
    setData(newOrders);
    setEditOrders(null);
  };

  const nameBodyTemplate = (Order) => {
    return editOrders === Order.id ? <InputField inputName="name" input={Order} /> : Order.name;
  };

  const actionsBodyTemplate = ({ id }) => {
    const actionsProps = { editingId: editOrders, id, handleUpdateRegister: handleUpdateOrder, updateRegister: updateOrder, deleteRegister: deleteOrder };
    return <ActionsDataTable {...actionsProps} />;
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Orderos</span>
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
  const props = { header, footer, data, deleteOrder, actionsBodyTemplate, nameBodyTemplate };

  return <OrderList {...props} />;
}

export default OrdersListContainer;
