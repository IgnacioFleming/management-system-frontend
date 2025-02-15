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

export default function OrderList({ sale_id }) {
  const [orders, getOrders] = useGetDataById(ordersService, sale_id);
  const handleUpdateOrder = async (id) => {
    const quantity = document.getElementsByName("quantity")[0].value;
    await ordersService.update(id, { quantity: parseInt(quantity) });
    await getOrders(sale_id);
  };

  const deleteOrder = async (id) => {
    await ordersService.delete(id);
    await getOrders(sale_id);
  };
  return (
    <div className="card">
      {/* <DataTable value={orders} removableSort footer={footer} tableStyle={{ minWidth: "60rem" }}>
        <Column name="product_name" field="name" header="Producto" sortable></Column>
        <Column name="product_category" field="category" header="Categoría" sortable></Column>
        <Column name="quantity" field="quantity" header="Cantidad" body={quantityBodyTemplate} sortable></Column>
        <Column name="price" field="price" header="Precio" body={priceBodyTemplate} sortable></Column>
        <Column name="amount" field="amount" header="Total" body={amountBodyTemplate} sortable></Column>
        <Column header={<ExportButton data={orders} filename="orders.xlsx" />} body={actionsBodyTemplate}></Column>
      </DataTable> */}
      <div>
        <CustomTableContainer columns={columns} items={orders} updating handleUpdate={handleUpdateOrder} deletion handleDelete={deleteOrder} />
      </div>
    </div>
  );
}
