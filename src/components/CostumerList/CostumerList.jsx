import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
function CostumerList({ data, logoBodyTemplate, nameBodyTemplate, actionsBodyTemplate }) {
  return (
    <div className="card">
      <DataTable value={data} tableStyle={{ minWidth: "50rem" }}>
        <Column header="Logo" body={logoBodyTemplate}></Column>
        <Column field="account_number" header="Numero de Cuenta"></Column>
        <Column field="name" header="Name" body={nameBodyTemplate}></Column>
        <Column body={actionsBodyTemplate}></Column>
      </DataTable>
    </div>
  );
}

export default CostumerList;
