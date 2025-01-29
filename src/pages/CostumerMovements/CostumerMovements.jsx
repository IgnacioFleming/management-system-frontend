import { Link, useParams } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import MovementsApiCall from "../../services/movements";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { formatCurrency, formatDate } from "../../utils/utils";
import { Button } from "primereact/button";

function CostumerMovements() {
  const { id } = useParams();
  const { data } = useGetData(MovementsApiCall, id);
  const { costumer, movements, balance } = data;
  const typeBodyTemplate = ({ type }) => {
    if (type === "sale") return "Venta";
    if (type === "payment") return "Pago";
  };

  const dateBodyTemplate = ({ date }) => formatDate(date);
  const amountBodyTemplate = ({ type, amount }) => {
    return <div className={`${type === "sale" ? "text-red-500" : "pl-2 text-green-500"}`}>{type === "sale" ? formatCurrency(-amount) : formatCurrency(amount)}</div>;
  };

  const footer = () => (
    <div style={{ marginLeft: "78%" }}>
      <div>Total: {balance && formatCurrency(balance)}</div>
    </div>
  );
  return (
    <>
      <div className="flex justify-content-center mb-6 ">
        <div className="flex flex-column align-items-center w-3 ">
          <img className="w-full h-13rem" style={{ objectFit: "contain" }} src={costumer?.logo} alt="Costumer Logo" />
          <h3>{costumer?.name}</h3>
          <div>Número de Cuenta: {costumer?.account_number}</div>
        </div>
      </div>
      <DataTable value={movements} footer={footer}>
        <Column field="date" header="Fecha" body={dateBodyTemplate}></Column>
        <Column field="type" header="Tipo de Movimiento" body={typeBodyTemplate}></Column>
        <Column field="amount" header="Monto" body={amountBodyTemplate}></Column>
      </DataTable>
      <Link to="/balances">
        <Button className="m-3" label="Volver" />
      </Link>
    </>
  );
}

export default CostumerMovements;
