import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ExportButton from "../../components/ExportButton/ExportButton";
function CostumerList({ costumers, logoBodyTemplate, nameBodyTemplate, actionsBodyTemplate, footer, header, filters }) {
  return (
    <div className="card">
      <DataTable value={costumers} removableSort paginator rows={5} filters={filters} header={header} footer={footer} tableStyle={{ minWidth: "50rem" }}>
        <Column header="Logo" body={logoBodyTemplate}></Column>
        <Column field="account_number" header="Numero de Cuenta" sortable></Column>
        <Column field="name" header="Name" body={nameBodyTemplate} sortable></Column>
        <Column header={<ExportButton data={costumers} filename="costumers.xlsx" />} body={actionsBodyTemplate}></Column>
      </DataTable>
    </div>
  );
}

export default CostumerList;
