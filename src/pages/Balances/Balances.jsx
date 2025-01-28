import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
const balances = [
  { id: 1, costumer_id: 1, balance_amount: 0 },
  { id: 2, costumer_id: 3, balance_amount: 0 },
  { id: 3, costumer_id: 3, balance_amount: 0 },
];

function Balances() {
  return (
    <>
      <DataTable value={balances}>
        <Column header="Id" field="id" />
        <Column header="Saldo" field="balance_amount" />
      </DataTable>
    </>
  );
}

export default Balances;
