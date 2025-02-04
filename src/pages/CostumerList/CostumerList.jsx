import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ExportButton from "../../components/ExportButton/ExportButton";
function CostumerList({ data, logoBodyTemplate, nameBodyTemplate, actionsBodyTemplate, footer, header, filters }) {
  const exportHeaders = [
    { label: "Id de cliente", key: "id" },
    { label: "Nombre", key: "name" },
    { label: "Url de imagen", key: "logo" },
    { label: "Número de cuenta", key: "account_number" },
  ];
  return (
    <div className="card">
      <DataTable value={data} removableSort paginator rows={5} filters={filters} header={header} footer={footer} tableStyle={{ minWidth: "50rem" }}>
        <Column header="Logo" body={logoBodyTemplate}></Column>
        <Column field="account_number" header="Numero de Cuenta" sortable></Column>
        <Column field="name" header="Name" body={nameBodyTemplate} sortable></Column>
        <Column header={<ExportButton data={data} filename="costumers.csv" headers={exportHeaders} />} body={actionsBodyTemplate}></Column>
      </DataTable>
    </div>
  );
}

export default CostumerList;
