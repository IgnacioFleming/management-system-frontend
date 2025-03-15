import { Button } from "primereact/button";
import Alerts from "../../helpers/alerts/alerts";

function InitialButtons({ id, updating, deletion, updateRegister, deleteRegister }) {
  const deleteWithAlert = async () => {
    await Alerts.warnAlert({ title: "Advertencia!", text: "Estás seguro que querés eliminar este registro?", hasCancellation: true, confirmCallback: async () => await deleteRegister(id), confirmButtonText: "Eliminar", cancelButtonText: "Cancelar" });
  };
  return (
    <div className="flex flex-column gap-1">
      <div>
        {updating && (
          <Button severity="info" onClick={() => updateRegister(id)}>
            <i className="pi pi-pen-to-square"></i>
          </Button>
        )}
      </div>
      <div>
        {deletion && (
          <Button severity="danger" onClick={deleteWithAlert}>
            <i className="pi pi-trash"></i>
          </Button>
        )}
      </div>
    </div>
  );
}

export default InitialButtons;
