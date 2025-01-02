import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useGetData } from "../hooks/useGetData";
function CostumerList() {
  const { data } = useGetData(CostumerApiCall);

  return (
    <div className="card">
      <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div>
  );
}

export default CostumerList;
