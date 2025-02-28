import { Link, useParams } from "react-router-dom";
import { formatCurrency, inputTypes } from "../../helpers/utils";
import { Button } from "primereact/button";
import { movementsService } from "../../services";
import { useGetDataById } from "../../hooks/useGetDataById";
import CustomTableContainer from "../../components/CustomTable/CustomTableContainer";

const columns = [
  { label: "Fecha", field: "date", inputType: inputTypes.DATE, sortable: true },
  { label: "Tipo de movimiento", field: "type", sortable: true },
  { label: "Monto", field: "amount", sortable: true, inputType: inputTypes.CURR },
];

function CostumerMovements() {
  const { id } = useParams();
  const [movementsData] = useGetDataById(movementsService, id);
  const { costumer, movements, balance } = movementsData;

  const footer = () => {
    return (
      <div>
        El saldo del cliente es: <strong>{formatCurrency(balance)}</strong>
      </div>
    );
  };
  return (
    <>
      <div className="flex justify-content-center mb-6 mt-1 ">
        <div className="flex flex-column align-items-center w-3">
          <img className="w-full h-13rem" style={{ objectFit: "contain" }} src={costumer?.logo} alt="Costumer Logo" />
          <h3>{costumer?.name}</h3>
          <div>Número de Cuenta: {costumer?.account_number}</div>
        </div>
      </div>
      <CustomTableContainer label="Movimientos" columns={columns} items={movements} extractionFilename="movements.xlsx" paginator rows={5} customFooter={footer} />
      <Link to="/balances">
        <Button className="m-3" label="Volver" />
      </Link>
    </>
  );
}

export default CostumerMovements;
