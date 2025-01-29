import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useGetData } from "../../hooks/useGetData";
import BalancesApiCall from "../../services/balances";
import { formatCurrency } from "../../utils/utils";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

function Balances() {
  const { data } = useGetData(BalancesApiCall);

  const nameBodyTemplate = (balance) => {
    return (
      <div className="flex align-items-center gap-3">
        <img src={balance.logo} alt={balance.logo} className="w-6rem h-6rem shadow-2 border-round" style={{ objectFit: "cover" }} />
        <div>{balance.name}</div>
      </div>
    );
  };

  const balanceAmountBodyTemplate = ({ balance_amount }) => {
    return formatCurrency(balance_amount);
  };

  const showDetailBodyTemplate = ({ costumer_id }) => {
    return (
      <Link to={`/balances/${costumer_id}`}>
        <Button>Ver Detalle</Button>
      </Link>
    );
  };
  return (
    <>
      <DataTable value={data} header="Cuentas Corrientes">
        <Column header="Número de Cuenta" field="account_number" />
        <Column header="Cliente" field="name" body={nameBodyTemplate} />
        <Column header="Saldo" field="balance_amount" body={balanceAmountBodyTemplate} />
        <Column body={showDetailBodyTemplate}></Column>
      </DataTable>
    </>
  );
}

export default Balances;
