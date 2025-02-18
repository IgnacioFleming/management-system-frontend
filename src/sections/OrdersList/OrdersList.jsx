import CustomTableContainer from "../../components/CustomTable/CustomTableContainer";
import { inputTypes } from "../../helpers/utils";
import { useGetDataById } from "../../hooks/useGetDataById";
import { ordersService } from "../../services";

const columns = [
  { label: "Producto", field: "name", sortable: true },
  { label: "Categoría", field: "category", sortable: true },
  { label: "Cantidad", field: "quantity", sortable: true, isEditable: true, inputType: inputTypes.INT },
  { label: "Precio", field: "price", sortable: true, inputType: inputTypes.CURR },
  { label: "Monto", field: "amount", sortable: true, inputType: inputTypes.CURR },
];

export default function OrderList({ sale_id, refreshSales }) {
  const [orders, getOrders] = useGetDataById(ordersService, sale_id);
  const handleUpdateOrder = async (id) => {
    const quantity = document.getElementsByName("quantity")[0].value;
    await ordersService.update(id, { quantity: parseInt(quantity) });
    await getOrders(sale_id);
    refreshSales();
  };

  const deleteOrder = async (id) => {
    await ordersService.delete(id);
    await getOrders(sale_id);
    refreshSales();
  };
  return (
    <div className="card">
      <CustomTableContainer columns={columns} items={orders} updating handleUpdate={handleUpdateOrder} deletion handleDelete={deleteOrder} />
    </div>
  );
}
