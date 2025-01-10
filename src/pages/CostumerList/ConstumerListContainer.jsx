import { useGetData } from "../../hooks/useGetData";
import CostumersApiCall from "../../services/costumers";
import { useState } from "react";
import CostumerList from "./CostumerList";
import ActionsDataTable from "../../components/Actions/ActionsDataTable";
import { InputField } from "../../components/InputField/InputField";
function CostumerListContainer() {
  const { data, setData } = useGetData(CostumersApiCall);
  const [editCostumer, setEditCostumer] = useState(null);

  const deleteCostumer = async (id) => {
    await CostumersApiCall.delete(id);
    const newData = data.filter((client) => client.id !== id);
    setData(newData);
  };
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
    const actionsProps = { editingId: editCostumer, id, handleUpdateRegister: handleUpdateCostumer, updateRegister: updateCostumer, deleteRegister: deleteCostumer };
    return <ActionsDataTable {...actionsProps} />;
  };

  const updateCostumer = (id) => {
    setEditCostumer(id);
  };

  const props = { logoBodyTemplate, actionsBodyTemplate, nameBodyTemplate, data };

  return <CostumerList {...props} />;
}

export default CostumerListContainer;
