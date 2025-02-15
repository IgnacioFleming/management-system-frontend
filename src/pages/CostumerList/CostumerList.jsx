import CustomTableContainer from "../../components/CustomTable/CustomTableContainer";
import { useRef } from "react";
import { costumersService } from "../../services";
import { useGetData } from "../../hooks/useGetData";

const columns = [
  { label: "Logo", field: "logo" },
  { label: "Número de Cuenta", field: "account_number", sortable: true, isNumber: true },
  { label: "Nombre", field: "name", sortable: true, isEditable: true },
];

function CostumerList() {
  const [costumers, getCostumers] = useGetData(costumersService);

  const fileRef = useRef(null);
  const handleUpdateCostumer = async (id) => {
    const name = document.getElementsByName("name")[0].value;
    const updatedFile = fileRef.current.getFiles()[0];
    const formData = new FormData();
    formData.append("name", name);
    if (updatedFile) formData.append("file", updatedFile);
    await costumersService.update(id, formData);
    getCostumers();
  };

  const deleteCostumer = async (id) => {
    await costumersService.delete(id);
    getCostumers();
  };

  return (
    <div className="card">
      <CustomTableContainer columns={columns} items={costumers} extractionFilename="costumers.xlsx" label="Clientes" paginator rows={5} updating deletion ptRef={fileRef} handleUpdate={handleUpdateCostumer} handleDelete={deleteCostumer} />
    </div>
  );
}

export default CostumerList;
