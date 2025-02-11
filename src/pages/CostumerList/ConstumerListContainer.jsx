import { useGetData } from "../../hooks/useGetData";
import { useRef, useState } from "react";
import CostumerList from "./CostumerList";
import ActionsDataTable from "../../components/Actions/ActionsDataTable";
import { InputField } from "../../components/InputField/InputField";
import { FilterMatchMode } from "primereact/api";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { costumersService } from "../../services";
function CostumerListContainer() {
  const [costumers, getCostumers] = useGetData(costumersService);
  const [editCostumer, setEditCostumer] = useState(null);
  const [filters, setFilters] = useState({ global: { value: null, matchMode: FilterMatchMode.CONTAINS } });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const [file, setFile] = useState("");
  const fileRef = useRef(null);

  const handleSelect = (filename) => {
    setFile(filename);
  };
  const handleRemove = () => {
    setFile("");
  };
  const emptyTemplate = () => <div>No se ha seleccionado un archivo.</div>;

  const uploadOptions = { style: { display: "none" } };

  const cancelOptions = { style: { display: !file && "none" } };

  const chooseOptions = { className: "bg-green-500 border-green-500" };

  const pt = { badge: { root: { style: { display: "none" } } } };

  const deleteCostumer = async (id) => {
    await costumersService.delete(id);
    getCostumers();
  };
  const handleUpdateCostumer = async (id) => {
    const name = document.getElementsByName("name")[0].value;
    const updatedFile = fileRef.current.getFiles()[0];
    const formData = new FormData();
    formData.append("name", name);
    if (updatedFile) formData.append("file", updatedFile);
    await costumersService.update(id, formData);
    setEditCostumer(null);
    getCostumers();
  };

  const nameBodyTemplate = (client) => {
    return editCostumer === client?.id ? <InputField inputName="name" input={client} /> : client?.name;
  };

  const logoBodyTemplate = (client) => {
    return (
      <div className="flex gap-2">
        <img src={client?.logo} alt={client?.logo} className="w-6rem h-6rem shadow-2 border-round" style={{ objectFit: "cover" }} />
        {editCostumer === client?.id && <FileUpload chooseLabel="Subir Imagen" chooseOptions={chooseOptions} ref={fileRef} name="thumbnail" accept="image/*" multiple={false} maxFileSize={1000000} uploadOptions={uploadOptions} cancelOptions={cancelOptions} onSelect={handleSelect} onRemove={handleRemove} onClear={handleRemove} emptyTemplate={emptyTemplate} pt={pt} />}
      </div>
    );
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
            <Button onClick={getCostumers} icon="pi pi-refresh" rounded raised />
          </div>
        </div>
      </>
    );
  };
  const header = renderHeader();

  const footer = `En total hay ${costumers ? costumers.length : 0} clientes.`;
  const props = { logoBodyTemplate, actionsBodyTemplate, nameBodyTemplate, costumers, footer, header, filters };

  return <CostumerList {...props} />;
}

export default CostumerListContainer;
