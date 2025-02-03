import { useGetData } from "../../hooks/useGetData";
import CostumersApiCall from "../../services/costumers";
import { useState } from "react";
import CostumerList from "./CostumerList";
import ActionsDataTable from "../../components/Actions/ActionsDataTable";
import { InputField } from "../../components/InputField/InputField";
import { FilterMatchMode } from "primereact/api";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
function CostumerListContainer() {
  const { data, setData, refreshData } = useGetData(CostumersApiCall);
  const [editCostumer, setEditCostumer] = useState(null);
  const [filters, setFilters] = useState({ global: { value: null, matchMode: FilterMatchMode.CONTAINS } });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

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
    return <img src={client.logo} alt={client.logo} className="w-6rem h-6rem shadow-2 border-round" style={{ objectFit: "cover" }} />;
  };

  const actionsBodyTemplate = ({ id }) => {
    const actionsProps = { editingId: editCostumer, id, handleUpdateRegister: handleUpdateCostumer, updateRegister: updateCostumer, deleteRegister: deleteCostumer };
    return <ActionsDataTable {...actionsProps} deletion updating />;
  };

  const updateCostumer = (id) => {
    setEditCostumer(id);
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let inputValue = value;
    if (inputValue.startsWith("$")) inputValue = value.slice(1);
    inputValue = inputValue.replace(/(\.0{0,2})$/, "");
    let _filters = { ...filters };
    _filters["global"].value = inputValue;
    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <>
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
          <span className="text-xl text-900 font-bold">Clientes</span>
          <div className="flex justify-content-end gap-2">
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search" />
              <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Buscar Cliente" />
            </IconField>
            <Button onClick={refreshData} icon="pi pi-refresh" rounded raised />
          </div>
        </div>
      </>
    );
  };
  const header = renderHeader();

  const footer = `En total hay ${data ? data.length : 0} clientes.`;
  const props = { logoBodyTemplate, actionsBodyTemplate, nameBodyTemplate, data, footer, header, filters };

  return <CostumerList {...props} />;
}

export default CostumerListContainer;
