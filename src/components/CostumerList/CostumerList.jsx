import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useGetData } from "../../hooks/useGetData";
import CostumersApiCall from "../../services/costumers";
import { useState } from "react";
import ActionsDataTable from "../Actions/ActionsDataTable";
import { InputField } from "../InputField/InputField";
function CostumerList() {
  const { data, setData } = useGetData(CostumersApiCall);
  const [editCostumer, setEditCostumer] = useState(null);

  const handleUpdateCostumer = async (id) => {
    const name = document.getElementsByName("name")[0].value;

    const updatedCostumer = await CostumersApiCall.update(id, { name });

    const costumerIndex = data.findIndex((e) => e.id === id);
    const newCostumers = [...data];
    newCostumers.splice(costumerIndex, 1, updatedCostumer);
    setData(newCostumers);
    setEditCostumer(null);
  };

  const nameBodyTemplate = (client) => {
    return editCostumer === client.id ? <InputField inputName="name" input={client} /> : client.name;
  };

  const logoBodyTemplate = (client) => {
    return <img src={client.logo} alt={client.logo} className="w-6rem shadow-2 border-round" />;
  };

  const actionsBodyTemplate = ({ id }) => {
    const actionsProps = { editingId: editCostumer, id, handleUpdateRegister: handleUpdateCostumer, updateRegister: updateCostumer, deteleRegister: deleteCostumer };
    return <ActionsDataTable {...actionsProps} />;
  };

  const deleteCostumer = (id) => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => setData(json.payload));
  };

  const updateCostumer = (id) => {
    setEditCostumer(id);
  };

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
