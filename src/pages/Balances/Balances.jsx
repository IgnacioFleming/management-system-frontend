import { useGetData } from "../../hooks/useGetData";
import { balancesService } from "../../services";
import CustomTableContainer from "../../components/CustomTable/CustomTableContainer";
import { inputTypes } from "../../helpers/utils";

const columns = [
  { label: "Logo", field: "logo" },
  { label: "Cliente", field: "name", sortable: true },
  { label: "Número de Cuenta", field: "account_number", sortable: true, isNumber: true },
  { label: "Balance", field: "balance_amount", sortable: true, isNumber: true, inputType: inputTypes.CURR },
];
// costumer_id,balance_amount ,costumers.account_number, costumers.name, costumers.logo
function Balances() {
  const [balances, getBalances] = useGetData(balancesService);

  return <CustomTableContainer columns={columns} items={balances} extractionFilename="balances.xlsx" label="Balances" paginator rows={5} path="/balances" refreshItems={getBalances} />;
}

export default Balances;
